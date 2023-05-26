import type { Meta, StoryObj } from '@storybook/react';

import Tag from '../../src/components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'commonComponents/Tag',
  component: Tag,
  tags: ['autodocs'],
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
      defaultValue: '16px',
    },
    padding: {
      control: {
        type: 'string',
      },
      defaultValue: '12px 32px',
    },
    margin: {
      control: {
        type: 'string',
      },
      defaultValue: '0',
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
    inversion: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
  parameters: {
    componentSubtitle: '태그 및 이벤트 허용 태그 컴포넌트 문서'
  }
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const option1: Story = {
  args: {
    title: '줄이기',
    padding: '8px 24px',
    fontSize: '18px',
    clickAble: true,
    onClickHandler: ()=>{alert('click!')}
  },
};

export const option2: Story = {
  args: {
    title: 'HOT!',
    padding: '8px 32px',
  },
};

export const option3: Story = {
  args: {
    title: '이벤트',
    fontSize: '18px',
    padding: '4px 48px',
  },
};

export const option4: Story = {
  args: {
    title: '서울 - 양천구',
    padding: '12px 72px',
    margin: '40px 80px',
    fontSize: '20px',
    clickAble: true,
    onClickHandler: ()=>{alert('click!')}
  },
};

export const option5: Story = {
  args: {
    title: '더보기',
    padding: '8px 88px',
    clickAble: true,
    onClickHandler: ()=>{alert('click!')}
  },
};

export const option6: Story = {
  args: {
    title: '팔로우',
    padding: '8px 40px',
    clickAble: true,
    onClickHandler: ()=>{alert('click!')},
    inversion: true
  },
};
