import { useInfiniteQuery } from 'react-query';
import type { boardSearchOptionData } from '../types/apiTypes';
import { boardApiList } from '../apis/controller/boardPage';

// 게시판 데이터를 가져오는 비동기 함수
async function fetchStoreBoardData(req: boardSearchOptionData) {

  let queryString = `/list/stores?page=${req.page}`;

  //지역
  queryString += req.address.length > 0 ? `&address=${req.address}` : '';

  //해시태그 검색어
  queryString += req.searchType.length > 0 ? `&searchType=${req.searchType.join('#')}` : '';

  //정렬타입
  queryString += `&sortType=${req.sortType}`;

  try {
    const { data } = await boardApiList.getBoardList(queryString);
    if(data.length ===0){
      req.setToast(true)
    }else{
      if(Number(req.page)-1 >=req.resData.length){
        let temp = [];
        if(req.resData.length !== 0)
          temp.push(req.resData)
        temp.push(data)
        req.setResData(temp)
      }
    }
    return data;
  } catch (error) {
    console.log(error)
  }
}

export function useGetStoreBoardListdData(req: boardSearchOptionData) {
  const queryKey = ['boardData', req.page, req.address, req.searchType, req.sortType];

  // useQuery 훅을 사용하여 데이터 가져오기
  return useInfiniteQuery(queryKey, () => fetchStoreBoardData(req), {
    getNextPageParam: (lastPage, pages) => {
      // 페이지 번호를 pageCount로 설정합니다.
      return req.page+1;
    },
  });
}