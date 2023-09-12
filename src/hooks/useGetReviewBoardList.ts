import { useInfiniteQuery } from 'react-query';
import type { reviewBoardSearchOptionData } from '../types/apiTypes';
import { boardApiList } from '../apis/controller/boardPage';

// 게시판 데이터를 가져오는 비동기 함수
async function fetchReviewBoardData(req: reviewBoardSearchOptionData) {

  let queryString = `/list/reviews?page=${req.page}`;

  //지역
  queryString += req.address.length > 0 ? `&address=${req.address}` : '';

  //해시태그 검색어
  queryString += req.searchType.length > 0 ? `&searchType=${req.searchType.join('#')}` : '';

  //정렬타입
  queryString += `&sortType=${req.sortType}`;

  console.log("getBoardListRUL: ", queryString)

  try {
    const { data } = await boardApiList.getBoardList(queryString);
    
      // pageCount 1, 첫 검색시, 초기화
      if(Number(req.page) === 1 ){
        if(data.length ===0){  // 첫 검색인데 데이터 없을시
          req.setToast(true);  // 데이터 없다고 띄우기
          req.setResData([])   // 데이터 초기화
        }else{                        // 검색해서 받은 데이터 있는 경우
          let temp = [];
          temp.push(data)             // 데이터 가공
          req.setResData(temp)        // 받은 데이터 저장
        } 
      }

      // 같은 쿼리로 pageCount만 변경
      else if(Number(req.page)-1 >=req.resData.length){
        if(data.length ===0 && req.resData.length !== 0){ // 새로 받은 데이터는 빈배열이나, 기존에 가지고 있는 데이터가 있는 경우
          req.setToast(true);                             // 데이터 없다고 띄우기
        }else{                  // 새로 받은 데이터가 있는 경우
          let temp = req.resData;
          temp.push(data)     
          req.setResData(temp)
        } 
      }
    
    return data;
  } catch (error) {
    console.log(error)
  }
}

export function useGetReviewBoardListdData(req: reviewBoardSearchOptionData) {
  const queryKey = ['boardData', req.page, req.address, req.searchType, req.sortType];

  // useQuery 훅을 사용하여 데이터 가져오기
  return useInfiniteQuery(queryKey, () => fetchReviewBoardData(req), {
    getNextPageParam: (lastPage, pages) => {
      // 페이지 번호를 pageCount로 설정합니다.
      return req.page+1;
    },
  });
}