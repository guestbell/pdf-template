import * as React from "react";
import PdfTemplate, {
  FieldType,
  Plugin,
  Template,
  Preview,
  Controls,
} from "../..";

export interface SimpleProps {
  debug?: boolean;
}

type State = { title: { text: string } };

const simpleTemplate: Template<State> = {
  basePdf: "",
  fields: {
    title: {
      initialState: { text: "" },
      type: FieldType.Text,
    },
  },
};

const plugins: Plugin<unknown, any>[] = [];

function Simple(props: SimpleProps) {
  return (
    <PdfTemplate<State> template={simpleTemplate} plugins={plugins}>
      <Preview />
      <Controls />
    </PdfTemplate>
  );
}

export default Simple;
