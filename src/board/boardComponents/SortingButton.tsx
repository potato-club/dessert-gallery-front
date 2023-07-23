import React from 'react'
import { OrderButtonWrap, OrderButton, OrderMenu } from './SortingButton.style'
import { boardSortProps } from '../../types/componentsProps'
import { ArrowBottom } from '../../../public/svg'

export default function SortingButton({sorting, isSelect, selected, selectOrder}:boardSortProps) {
  return (
    <>
        <OrderButton onClick={sorting}>
          {selected.kor}
          <ArrowBottom width="35px" height="14px" stroke='#FF8D00'/>
        </OrderButton>
        {
            isSelect && (
                <OrderButtonWrap>
                    <OrderMenu onClick={()=>{selectOrder({kor:'팔로워순', eng:'followers'})}}>팔로워순</OrderMenu>
                    <OrderMenu onClick={()=>{selectOrder({kor:'인기순', eng:'popularity'})}}>인기순</OrderMenu>
                    <OrderMenu onClick={()=>{selectOrder({kor:'최신순', eng:'latest'})}}>최신순</OrderMenu>
                </OrderButtonWrap>
            )
        }
    </>
  )
}
