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

  console.log("getBoardListRUL: ", queryString)

  try {
    const { data } = await boardApiList.getBoardList(queryString);
    console.log("getBoardList: ", data)
    return data;
  } catch (error) {
    console.log(error)
  }
}

export function useGetStoreBoardListdData(req: boardSearchOptionData) {
  // useQuery 훅을 사용하여 데이터 가져오기
  return useInfiniteQuery('boardData', () => fetchStoreBoardData(req));
}