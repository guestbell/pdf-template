import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Simple from "./Simple";

const meta: Meta<typeof Simple> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Simple",
  component: Simple,
};

export default meta;

type Story = StoryObj<typeof Simple>;

export const Main: Story = {
  render: (p) => <Simple {...p} />,
  args: {},
};

export const Debug: Story = {
  render: (p) => <Simple {...p} />,
  args: { debug: true },
};
