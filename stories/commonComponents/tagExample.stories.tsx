import { withKnobs, text, boolean, button, select } from '@storybook/addon-knobs';

import Tag from '../../src/components/Tag';
import { tagValue } from '../../src/types/componentsProps';

export default {
  title: 'commonComponents/Tag',
  component: Tag,
  decorators: [withKnobs],
};

export const Option1 = () => {
  const title = text('title', '줄이기');
  const length = select('length', ['short', 'medium', 'long'], 'short');
  const clickAble = boolean('clickAble', true);
  const onClickHandler = button('onClickHandler', () => { console.log('click') });

  return <Tag title={title} length={length} clickAble={clickAble} onClickHandler={onClickHandler} />;
};


export const Option2 = () => {
  const title = text('title', 'HOT!');
  const length = select('length', ['short', 'medium', 'long'], 'short');
  const clickAble = boolean('clickAble', false);

  return <Tag title={title} length={length} clickAble={clickAble} />;
};


export const Option3 = () => {
  const title = text('title', '이벤트');
  const length = select('length', ['short', 'medium', 'long'], 'medium');
  const clickAble = boolean('clickAble', false);

  return <Tag title={title} length={length} clickAble={clickAble} />;
};


export const Option4 = () => {
  const title = text('title', '서울 - 양천구');
  const length = select('length', ['short', 'medium', 'long'], 'medium');
  const fontSize = text('fontSize', '16px')
  const clickAble = boolean('clickAble', true);
  const onClickHandler = button('onClickHandler', () => { console.log('click') });

  return <Tag title={title} fontSize={fontSize} length={length} clickAble={clickAble} onClickHandler={onClickHandler} />;
};



export const Option5 = () => {
  const title = text('title', '더보기');
  const length = select('length', ['short', 'medium', 'long'], 'long');
  const clickAble = boolean('clickAble', true);
  const onClickHandler = button('onClickHandler', () => { console.log('click') });

  return <Tag title={title} length={length} clickAble={clickAble} onClickHandler={onClickHandler} />;
};



/* <Tag title='줄이기' length='short' clickAble={false}  />
      <Tag title='HOT!'  length='short' clickAble={false}  />

      <Tag title='이벤트'  length='medium' clickAble={false}  />
      <Tag title='서울 - 양천구' length='medium' fontSize='16px' clickAble={true} onClickHandler={() => handleClick(12)} />


      <Tag title='더보기' length='long' clickAble={true} onClickHandler={() => handleClick(12)} /> */