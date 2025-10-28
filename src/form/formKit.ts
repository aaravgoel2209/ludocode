// src/form/formKit.ts
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

export const { fieldContext, formContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {},
});