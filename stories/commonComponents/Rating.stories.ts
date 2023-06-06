import { Meta, StoryObj } from "@storybook/react";
import Rating from "../../src/components/Rating";

const meta: Meta<typeof Rating> = {
  title: "commonComponents/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
      defaultValue: "medium",
    },
    ratingValue: {
      defaultValue: "0.0",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const SRating: Story = {
  args: {
    size: "small",
    ratingValue: "0.0",
  },
};

export const MRating: Story = {
  args: {
    size: "medium",
    ratingValue: "0.0",
  },
};
