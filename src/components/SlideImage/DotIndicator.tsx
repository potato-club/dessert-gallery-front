import React from 'react'
import { dotIndicatorValue } from '../../types/componentsProps'
import { DotList, TrueDot, FalseDot } from './DotIndicator.style'

export default function DotIndicator({ imgLength, index }: dotIndicatorValue) {
    return (
      <DotList>
        {Array.from({ length: imgLength }, (_, i) => {
          const key = i.toString();
          return i === index ? <TrueDot key={key} /> : <FalseDot key={key} />;
        })}
      </DotList>
    );
  }