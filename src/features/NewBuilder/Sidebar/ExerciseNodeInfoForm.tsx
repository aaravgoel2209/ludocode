import { courseFormOpts, withForm } from "@/form/formKit";

export const ExerciseNodeInfoForm = withForm({
  ...courseFormOpts,
  props: {
    lessonIndex: 0 as number,
    moduleIndex: 0 as number,
    exerciseIndex: 0 as number,
  },
  render: ({ form, moduleIndex, lessonIndex, exerciseIndex }) => {
    const exercise =
      `modules[${moduleIndex}].lessons[${lessonIndex}].exercises[${exerciseIndex}]` as const;

    return (
      <div className="text-white grid gap-6 grid-cols-[auto_1fr] items-center">
        <p>Title</p>
        <form.AppField name={`${exercise}.title`}>
          {(f) => <f.FormTitleField />}
        </form.AppField>

        <p>Subtitle</p>
        <form.AppField name={`${exercise}.subtitle`}>
          {(f) => <f.FormTitleField />}
        </form.AppField>

        <p>Prompt</p>
        <form.AppField name={`${exercise}.prompt`}>
          {(f) => <f.FormTitleField />}
        </form.AppField>
      </div>
    );
  },
});
