// src/form/formKit.ts
import { createFormHook, createFormHookContexts, formOptions } from '@tanstack/react-form'
import type { ModuleSnapshot } from '../Types/Snapshot/SnapshotTypes'

export const { fieldContext, formContext, useFormContext } = createFormHookContexts()
export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {},
})

export const courseFormOpts = formOptions({
  defaultValues: { courseId: '', modules: [] as ModuleSnapshot[] },
})