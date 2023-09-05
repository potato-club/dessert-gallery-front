import { Meta, StoryObj } from "@storybook/react";
import Bookmark from "../../src/components/SlideImage/Bookmark";

const meta: Meta<typeof Bookmark> = {
  title: "commonComponents/Bookmark",
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

type Story = StoryObj<typeof Bookmark>;

export const BookmarkOn: Story = {
  args: {
    size: "small",
    absolute: true,
  },
};

