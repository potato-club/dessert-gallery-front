import React, {useEffect, useRef} from 'react'
import { NearbyStorePostWrap, TextWrap,Text, RatingWrap, MapWrap, BottomWrap, TopWrap } from './NearbyStorePost.style'
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

    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_API_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    // 스크립트 로드가 완료되면 메인 컴포넌트 렌더링
    script.onload = () => {
      (window as any).kakao.maps.load(function() {

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
      });
    };


  },[])


  return (
    <NearbyStorePostWrap key={item.longitude+item.latitude}>
        <MapWrap ref={storeMap}/>
        <TextWrap>
          <TopWrap>
            <Text bold fontSize='40px'>{item.storeName}</Text>
            <Text line fontSize='14px'>{item.storeAddress}</Text>
          </TopWrap>
          <BottomWrap>
            <RatingWrap>
              <Rating size='medium' ratingValue={item.score}/>
            </RatingWrap>
            <Tag width='120px' height='28px' clickAble={true} title='보러가기' hoverCss={true} margin='8px 0 0 0' fontSize='11px' onClickHandler={()=>window.location.href=`/galleryBoard/${item.storeId}`}/>
          </BottomWrap>
        
        </TextWrap>
    </NearbyStorePostWrap>
  )
}

export default NearbyStorePost