import React, { useState } from 'react'
import Tag from '../../src/components/Tag';
import ReviewModalTest from '../../src/container/myPage/components/ReviewModalTest';

const temp = [
  {
    id: 9,
    name: "테스트 가게",
    content: "이하 전체 더미 데이터",
    address: "입력시 9번 가게로 등록됩니다",
    storeImage: {
      fileName: "https://cdn.pixabay.com/photo/2017/10/25/08/25/cupcakes-2887270_1280.jpg",
      fileUrl: "https://cdn.pixabay.com/photo/2017/10/25/08/25/cupcakes-2887270_1280.jpg"
    }
  },
]

function ReviewTest() {
   /**
   * 후기 모달 코드
   */
   //const setModalBgState = useSetRecoilState(modalBg);
   const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
 
   ///////////////////////
  return (
    <div>
      {/** --------리뷰모달 코드 */}
        <Tag title='후기 올리기' width='120px' height='40px' clickAble={true} hoverCss={true} fontSize='20px' onClickHandler={()=>{
          setShowReviewModal(true)
          //setModalBgState(true);
        }}/>

        {showReviewModal && <ReviewModalTest writeAbleStoreData={temp} setShowReviewModal={setShowReviewModal}/>}
      {/** 리뷰모달 코드------------- */}
   </div>
  )
}

export default ReviewTest