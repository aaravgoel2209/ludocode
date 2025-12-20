// src/Form/formKit.ts
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { CourseSnapSchema } from "@/types/Zod/SnapshotSchema/CourseSnapSchema";
import type { ModuleSnap } from "@/types/Builder/BuilderSnapshotTypes.ts";
import { OnboardingSnapSchema } from "@/types/Zod/OnboardingSchema/OnboardingSnapSchema";
import FormTitleField from "@/features/Builder/Components/fields/form-title-field.tsx";
import { AddExerciseFieldButton } from "@/features/Builder/Components/fields/add-exercise-field-button.tsx";
import { StatusDot } from "@/components/design-system/primitives/status-dot";

export const { fieldContext, formContext, useFormContext, useFieldContext } =
  createFormHookContexts();
export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FormTitleField,
    StatusButtonField: StatusDot,
    AddExerciseFieldButton,
  },
  formComponents: {},
});

export const courseFormOpts = {
  defaultValues: { courseId: "" as string, modules: [] as ModuleSnap[] },
  validators: {
    onSubmit: CourseSnapSchema,
  },
};
export const onboardingFormOpts = {
  defaultValues: {},
  validators: {
    onSubmit: OnboardingSnapSchema,
  },
};
