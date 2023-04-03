import * as React from "react";
import { ResetAction, SetState, Template, Plugin } from "../..";

export interface PdfTemplateProps<TState> {
  children?: React.ReactNode;
  template: Template<TState>;
  plugins: Plugin<TState>[];
  initialState?: TState;
}

function PdfTemplate<TState extends {} = {}>(props: PdfTemplateProps<TState>) {
  const { template, initialState, children } = props;
  const { fields } = template;
  type ActionsMap = {
    [S in keyof TState]: {
      type: S;
      value: SetState<TState[S]>;
    };
  };
  type ItemActions = ActionsMap[keyof ActionsMap] | ResetAction;
  const initialStateFinal = React.useMemo(
    () =>
      initialState ??
      Object.keys(fields).reduce<TState>(
        (current, key) => ({
          ...current,
          [key]: fields[key as keyof TState].initialState ?? {},
        }),
        {} as TState
      ),
    [fields, initialState]
  );
  const [state, dispatch] = React.useReducer(
    (state: TState, action: ItemActions) => {
      if (
        (Object.keys(state) as (keyof TState)[]).some((s) => s === action.type)
      ) {
        const actionType = action.type as keyof TState;
        const handledState =
          action.value instanceof Function
            ? action.value(state[actionType])
            : action.value;
        return { ...state, [action.type]: handledState };
      } else if (action.type === "reset") {
        return initialStateFinal;
      }
      return state;
    },
    initialStateFinal
  );
  return <>{children}</>;
}

export default React.memo(PdfTemplate) as typeof PdfTemplate;
