import React from 'react'
import { OrderButtonWrap, OrderButton, OrderMenu } from './SortingButton.style'
import { boardSortProps } from '../../../types/componentsProps'
import { DownArrow } from '../../../../public/svg'

export default function SortingButton({sorting, isSelect, selected, selectOrder}:boardSortProps) {
  return (
    <>
        <OrderButton onClick={sorting}>
          {selected.kor}
          <DownArrow width="35px" height="14px"/>
        </OrderButton>
        {
            isSelect && (
                <OrderButtonWrap>
                    <OrderMenu onClick={()=>{selectOrder({kor:'팔로워순', value:true})}}>팔로워순</OrderMenu>
                    <OrderMenu onClick={()=>{selectOrder({kor:'평점순', value:false})}}>평점순</OrderMenu>
                </OrderButtonWrap>
            )
        }
    </>
  )
}
