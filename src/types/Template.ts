import { Field } from "./Field";

export type Template<TState> = {
  basePdf: string;
  fields: { [key in keyof TState]: Field<TState[key]> };
  fieldsOrder?: (keyof TState)[];
};
