import ModalBackground from "../../src/components/ModalBackground";
import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "../../pages/index";

const meta: Meta<typeof ModalBackground> = {
  title: "commonComponents/ModalBackground",
  component: ModalBackground,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      description: "pages 폴더의 page를 받아옴",
      defaultValue: <MainPage />,
    },
  },
};
export default meta;
type Story = StoryObj<typeof ModalBackground>;

export const HomePage: Story = {
  args: {
    children: <MainPage />,
  },
};

export const SecondPage: Story = {
  args: {
    children: <div>second</div>,
  },
};

export const ThirdPage: Story = {
  args: {
    children: <div>thrid</div>,
  },
};
