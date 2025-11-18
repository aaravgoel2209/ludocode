import { InlineCode } from "@/components/Atoms/Text/InlineCode";
import { CodeBoxWrapper } from "@/components/Molecules/Wrapper/CodeBoxWrapper";
import { courseFormOpts, withForm } from "@/form/formKit";
import type { OptionSnap } from "@/Types/Snapshot/SnapshotTypes";
import { Fragment } from "react/jsx-runtime";

export const ExerciseNodeInfoForm = withForm({
  ...courseFormOpts,
  props: {
    lessonIndex: 0 as number,
    moduleIndex: 0 as number,
    exerciseIndex: 0 as number,
  },
  render: ({ form, moduleIndex, lessonIndex, exerciseIndex }) => {
    const exercisePath =
      `modules[${moduleIndex}].lessons[${lessonIndex}].exercises[${exerciseIndex}]` as const;

    const root = form.state.values;
    const exerciseState =
      root.modules?.[moduleIndex]?.lessons?.[lessonIndex]?.exercises?.[
        exerciseIndex
      ];

    if (!exerciseState) return null;

    const exerciseType = exerciseState.exerciseType;

    const hasPrompt = exerciseType !== "TRIVIA";

    return (
      <div className="text-white grid gap-8 grid-cols-2 items-start">
        <div className="flex flex-col gap-4">
          <form.AppField name={`${exercisePath}.title`}>
            {(f) => <f.FormTitleField name="Title" />}
          </form.AppField>

          <form.AppField name={`${exercisePath}.subtitle`}>
            {(f) => <f.FormTitleField name="Subtitle (Optional)" />}
          </form.AppField>

          {hasPrompt && (
            <form.AppField name={`${exercisePath}.prompt`}>
              {(f) => <f.FormTitleField name="Prompt (use ___ for gaps)" />}
            </form.AppField>
          )}
        </div>

        {hasPrompt && (
          <form.AppField name={`${exercisePath}.prompt`}>
            {(promptField) => (
              <form.AppField name={`${exercisePath}.correctOptions`}>
                {(correctField) => {
                  const prompt: string = promptField.state.value ?? "";
                  const correctOptions =
                    (correctField.state.value as OptionSnap[] | undefined) ??
                    [];

                  const parts = prompt.split("___");

                  return (
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-ludoAltText uppercase tracking-wide">
                        Live preview
                      </span>

                      <CodeBoxWrapper
                        header={false}
                        className="min-h-0 rounded-lg lg:min-h-0 bg-ludoGrayLight border border-ludoLightPurple"
                        innerClassName="p-4"
                      >
                        {prompt ? (
                          <p className="text-white text-left text-xl leading-loose font-light whitespace-pre-wrap break-words">
                            {parts.map((part, i) => (
                              <Fragment key={i}>
                                <InlineCode
                                  code={part}
                                  fontSize="20px"
                                  lineHeight="28px"
                                />
                                {i < parts.length - 1 && (
                                  <span
                                    className="
                                    inline-flex items-center 
                                    px-2 py-0.5 mx-1 
                                    rounded 
                                    bg-ludoGrayDark 
                                    text-ludoAltText 
                                    text-sm
                                  "
                                  >
                                    {correctOptions[i]?.content || "Missing"}
                                  </span>
                                )}
                              </Fragment>
                            ))}
                          </p>
                        ) : (
                          <span className="text-xs text-ludoAltText">
                            No prompt defined yet.
                          </span>
                        )}
                      </CodeBoxWrapper>
                    </div>
                  );
                }}
              </form.AppField>
            )}
          </form.AppField>
        )}
      </div>
    );
  },
});
