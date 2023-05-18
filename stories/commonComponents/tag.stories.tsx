import type { Meta, StoryObj } from '@storybook/react';

import Tag from '../../src/components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'commonComponents/Tag',
  component: Tag,
  tags: ['test'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      defaultValue: '공지사항',
    },
    fontSize: {
      control: {
        type: 'text',
      },
      defaultValue: '12px',
    },
    length: {
      control: {
        type: 'select',
        options: ['short', 'medium', 'long'],
      },
      defaultValue: '12px',
    },
    clickAble: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    onClickHandler: {
      control: {
        type: 'function',
      },
      defaultValue: ()=>{},
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    title: '공지사항',
    length: 'long',
    clickAble: true,
    onClickHandler: ()=>{alert('click!')}
  },
};

