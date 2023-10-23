import { boardApiList } from '../apis/controller/boardPage';

// 팔로우 상태와 팔로우/취소 함수를 관리하는 Hook
async function followAction(followState:boolean, storeId:number) {
  console.log("onClickBookmark ", followState, storeId)
    if(followState){
      boardApiList.putUnfollow(storeId.toString())
      .then(response => {
            console.log("response",response.data)
          })
          .catch(error => {
            console.error('팔로우 토글 실패:', error);
          });
    }else{
      boardApiList.postFollow(storeId.toString())
      .then(response => {
            console.log("response",response.data)
          })
          .catch(error => {
            console.error('팔로우 토글 실패:', error);
          });
    }
}

export default followAction;