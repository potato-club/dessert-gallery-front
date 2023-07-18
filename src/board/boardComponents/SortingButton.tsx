import React from 'react'
import { OrderButtonWrap, OrderButton, OrderMenu } from './SortingButton.style'
import { boardSortProps } from '../../types/componentsProps'

export default function SortingButton({isSelect, selected}:boardSortProps) {
  return (
    <>
        <OrderButton>{selected.kor}</OrderButton>
        {
            isSelect && (
                <OrderButtonWrap>
                    <OrderMenu>팔로워순</OrderMenu>
                    <OrderMenu>인기순</OrderMenu>
                    <OrderMenu>최신순</OrderMenu>
                </OrderButtonWrap>
            )
        }
    </>
  )
}
