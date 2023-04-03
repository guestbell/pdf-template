import { Field, Template } from "../types";

export function createTemplate<T extends Record<string, Field<any>>>(
  template: {
    fields: T;
  } & Omit<Template<never>, "fields">
): Template<{ [K in keyof T]: NonNullable<T[K]["initialState"]> }> {
  return template as Template<{
    [K in keyof T]: NonNullable<T[K]["initialState"]>;
  }>;
}
