import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RoundButton from "../../src/components/RoundButton";

const meta: Meta<typeof RoundButton> = {
  title: "commonComponents/RoundButton",
  component: RoundButton,
  tags: ["autodocs"],
};
export default meta;

type RoundButtonStory = StoryObj<typeof RoundButton>;

export const Primary: RoundButtonStory = {
  args: {},
};
