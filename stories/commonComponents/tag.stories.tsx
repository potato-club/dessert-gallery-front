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
    width: {
      control: {
        type: 'string',
      },
      defaultValue: '112px',
    },
    height: {
      control: {
        type: 'string',
      },
      defaultValue: '44px',
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
    hoverCss: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    shadow: {
      control: {
        type: 'boolean',
      },
      defaultValue: false
    }
  },
  parameters: {
    componentSubtitle: '태그 및 이벤트 허용 태그 컴포넌트 문서'
  }
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const option2: Story = {
  args: {
    title: 'HOT!',
    width: '110px',
    height: '43px'
  },
};

export const option3: Story = {
  args: {
    title: '가게 운영자 로그인',
    width: '342px',
    height: '60px',
    clickAble: true,
    onClickHandler: ()=>{alert('click!')},
    hoverCss: true,
    shadow:true
  },
};