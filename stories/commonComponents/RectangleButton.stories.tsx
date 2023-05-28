import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RectangleButton from "../../src/components/RectangleButton";

const meta: Meta<typeof RectangleButton> = {
  title: "commonComponents/RectangleButton",
  component: RectangleButton,
  tags: ["autodocs"],
};
export default meta;

type RectangleButtonStory = StoryObj<typeof RectangleButton>;

export const Primary: RectangleButtonStory = {
  args: {
    text: "",
  },
};
