import { createTemplate } from "./createTemplate";
import { FieldType } from "..";

const testStore = {
  basePdf: "test.pdf",
  fields: {
    foo: { initialState: "bar", type: FieldType.Image },
    baz: { type: FieldType.Text },
  },
};

describe("createTemplate", () => {
  it("doesn't modify the original data", () => {
    const template = createTemplate({ ...testStore });

    expect(template).toEqual(testStore);
  });
});
