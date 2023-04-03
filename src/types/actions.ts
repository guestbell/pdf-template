import { SetState } from "./";

export type StateAction<TState> = {
  type: string;
  value: SetState<TState>;
};

export type ResetAction = { type: "reset"; value?: never };

export type AllStateActions<TState> = StateAction<TState> | ResetAction;
