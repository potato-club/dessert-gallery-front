import React from "react";
import Header from "../../src/components/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "commonComponents/Header",
  component: Header,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Standard: Story = {};
