import * as React from "react";
import PdfTemplate, {
  FieldType,
  Plugin,
  Preview,
  Controls,
  createTemplate,
} from "../..";

export interface SimpleProps {
  debug?: boolean;
}

const simpleTemplate = createTemplate({
  basePdf: "",
  fields: {
    title: {
      initialState: { text: "" },
      type: FieldType.Text,
    },
  },
});

const plugins: Plugin[] = [];

function Simple(props: SimpleProps) {
  return (
    <PdfTemplate template={simpleTemplate} plugins={plugins}>
      <Preview />
      <Controls />
    </PdfTemplate>
  );
}

export default Simple;
