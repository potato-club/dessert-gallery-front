import React, { useState } from 'react'
import Tag from '../../src/components/Tag';
import ReviewModal from '../../src/container/myPage/components/ReviewModal';
import { useLoginUserInfo } from '../../src/hooks/useUser';

const temp = [
  {
    id: 1,
    name: "테스트 가게",
    content: "이하 전체 더미 데이터",
    address: "입력시 9번 가게로 등록됩니다",
    storeImage: {
      fileName: "https://cdn.pixabay.com/photo/2017/10/25/08/25/cupcakes-2887270_1280.jpg",
      fileUrl: "https://cdn.pixabay.com/photo/2017/10/25/08/25/cupcakes-2887270_1280.jpg"
    }
  },
  {
    id: 2,
    name: "행케",
    content: "행복한 케이크를 드려요",
    address: "서울시 양천구 오목로",
    storeImage: null
  }
]

function reviewTest() {
   /**
   * 후기 모달 코드
   */
   //const setModalBgState = useSetRecoilState(modalBg);
   const [showReviewModal, setShowReviewModal] = useState<Boolean>(false);
 
   ///////////////////////
  return (
    <div>
      {/** --------리뷰모달 코드 */}
        <Tag title='후기 올리기' width='120px' height='40px' clickAble={true} hoverCss={true} fontSize='20px' onClickHandler={()=>{
          setShowReviewModal(true)
          //setModalBgState(true);
        }}/>

        {showReviewModal && <ReviewModal writeAbleStoreData={temp} setShowReviewModal={setShowReviewModal}/>}
      {/** 리뷰모달 코드------------- */}
   </div>
  )
}

export default reviewTest