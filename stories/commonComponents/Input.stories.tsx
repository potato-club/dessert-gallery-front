import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "../../src/components/Input";

const meta: Meta<typeof Input> = {
  title: "commonComponents/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type InputStory = StoryObj<typeof Input>;

export const Primary: InputStory = {
  args: {},
};
