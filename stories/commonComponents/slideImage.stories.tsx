import type { Meta, StoryObj } from '@storybook/react';

import SlideImage from '../../src/components/SlideImage';
import Tag from '../../src/components/Tag';

const meta: Meta<typeof SlideImage> = {
  title: 'commonComponents/SlideImage',
  component: SlideImage,
  tags: ['autodocs'],
  argTypes: {
    scrArray: {
      control: {
        type: 'text'
      },
      defaultValue: [],
    },
    width: {
      control: {
        type: 'number',
      },
      defaultValue: 80,
    },
    height: {
      control: {
        type: 'number',
      },
      defaultValue: 80,
    },
    bookmark: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    children: {
      control: {
        type: 'reactnode',
      },
      defaultValue: <></>
    }
  },
  parameters: {
    componentSubtitle: '여러 개의 이미지를 슬라이드로 띄우는 컴포넌트 문서'
  }
};

export default meta;

type Story = StoryObj<typeof SlideImage>;

export const option1: Story = {
  args: {
    scrArray: [
      'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg',
      'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg'
    ],
    height:400,
    width: 400,
    bookmark: false,
    children: <></>
  },
};


export const option2: Story = {
  args: {
    scrArray: [
      'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg',
      'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg'
    ],
    height:400,
    width: 400,
    bookmark: true,
    onBookmark: true,
    children: <Tag title='HOT!' padding='8px 32px' clickAble={false}  />
  },
};


export const option3: Story = {
  args: {
    scrArray: [
      'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg',
      'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg'
    ],
    height:400,
    width: 400,
    bookmark: true,
    onBookmark: false,
    children: <Tag title='NEW' padding='8px 32px' clickAble={false}  />
  },
};