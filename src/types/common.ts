export type SetState<TState> = (
  state: TState | ((state: TState) => TState)
) => void;
