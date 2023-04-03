import { ReactNode } from "react";
import { FieldType, Field } from ".";

export type Plugin<TState = {}, TKey extends string = never> = {
  type: FieldType;
  controls: (
    state: TState,
    config: Omit<Plugin<TState>, "render">
  ) => ReactNode;
  insertToPdf: (doc: unknown, field: Field, state: TState) => void;
  tFunction?: (key: TKey) => string;
};
