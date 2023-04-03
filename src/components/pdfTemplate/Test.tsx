import * as React from "react";

export type Field<T> = {
  initialState?: T;
};

export type Template<T> = {
  basePdf: string;
  fields: { [key in keyof T]: Field<T[key]> };
};

export interface TestProps<T> {
  children?: React.ReactNode;
  template: Template<T>;
  initialState?: Partial<T>;
}

function createTemplate<T extends Record<string, Field<any>>>(
  template: {
    fields: T;
  } & Omit<Template<never>, "fields">
): Template<{ [K in keyof T]: NonNullable<T[K]["initialState"]> }> {
  return template as Template<{
    [K in keyof T]: NonNullable<T[K]["initialState"]>;
  }>;
}

const template = createTemplate({
  basePdf: "",
  fields: {
    test: {},
    title: { initialState: { text: "" } },
    subTitle: { initialState: { message: "" } },
  },
});

const template2 = {
  basePdf: "",
  fields: {
    test: {},
    title: { initialState: { text: "" } },
    subTitle: { initialState: { message: "" } },
  },
};

function Test<T>(props: TestProps<T>) {
  return null;
}

function Consumer() {
  return <Test template={template2} initialState={{}} />;
}

export default Test;

/*const template = {
  fields: {
    title: {
      initialState: { text: "" },
    } as Field<{ text: string }>,
    subTitle: {
      initialState: { message: "" },
    } as Field<{ message: string }>,
  },
};

type InferTemplate<T> = { fields: { [K in keyof T]: Field<T[K]> } };

type MyTemplate = InferTemplate<GetState<typeof template.fields>>;

type GetState<T> = {
  [K in keyof T]: T[K] extends Field<infer S> ? S : never;
};*/
