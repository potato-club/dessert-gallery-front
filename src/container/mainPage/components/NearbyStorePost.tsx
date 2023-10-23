import React, {useEffect, useRef} from 'react'
import { NearbyStorePostWrap, TextWrap,Text, RatingWrap, MapWrap } from './NearbyStorePost.style'
import Image from 'next/image'
import Rating from '../../../components/Rating'
import Tag from '../../../components/Tag'
import { nearbyStore } from '../../../types/apiTypes'

interface nearbyStoreProps {
  item: nearbyStore
}

function NearbyStorePost({item}: nearbyStoreProps) {
  const storeMap = useRef<HTMLDivElement>(null);

  useEffect(()=>{
      if (storeMap && storeMap.current) {
        // 이미지 지도에서 마커가 표시될 위치입니다 
        let markerPosition  = new (window as any).kakao.maps.LatLng(item.latitude, item.longitude); 

        // 이미지 지도에 표시할 마커입니다
        // 이미지 지도에 표시할 마커는 Object 형태입니다
        var marker = {
            position: markerPosition
        };

        let staticMapOption = { 
            center: new (window as any).kakao.maps.LatLng(item.latitude, item.longitude), // 이미지 지도의 중심좌표
            level: 3, // 이미지 지도의 확대 레벨
            marker: marker // 이미지 지도에 표시할 마커 
        };    

        // 이미지 지도를 생성합니다
        let staticMap = new (window as any).kakao.maps.StaticMap(storeMap.current, staticMapOption);
      }
  },[])

  return (
    <NearbyStorePostWrap key={item.longitude+item.latitude}>
        <MapWrap ref={storeMap}/>
        <TextWrap>
            <Text bold fontSize='45px'>{item.storeName}</Text>
            <Text fontSize='14px'>{item.storeAddress}</Text>
            <RatingWrap>
              <Rating size='medium' ratingValue={item.score}/>
            </RatingWrap>
            <Tag width='130px' height='32px' clickAble={true} title='보러가기' hoverCss={true} margin='8px 0 0 0' fontSize='11px' onClickHandler={()=>alert('click')}/>
        </TextWrap>
    </NearbyStorePostWrap>
  )
}

export default NearbyStorePost