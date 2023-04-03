import { ReactNode } from "react";
import { FieldType } from "./";

export type Field<TState = {}> = {
  title?: ReactNode;
  type: FieldType;
  initialState?: TState;
};
