import { Meta, StoryObj } from "@storybook/react";
import Follow from "../../src/components/SlideImage/Follow";

const meta: Meta<typeof Follow> = {
  title: "commonComponents/Follow",
  component: Bookmark,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
      defaultValue: "medium",
    },
    onBookmark: {
      type: "boolean",
      defaultValue: true,
    },
    absolute:{
      type: "boolean",
      defaultValue: true,
    },
    onClickBookmark:{
      type: "function",
      defaultValue: ()=>{alert('click!')}
    }
  },
};

export default meta;

type Story = StoryObj<typeof Follow>;

export const BookmarkOn: Story = {
  args: {
    size: "small",
    absolute: true,
  },
};

