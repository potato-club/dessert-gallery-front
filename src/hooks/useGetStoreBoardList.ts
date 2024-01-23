import { useInfiniteQuery } from 'react-query';
import queryStringLibrary from 'query-string';
import type { boardSearchOptionData } from '../types/apiTypes';
import { boardApiList } from '../apis/controller/boardPage';

// 게시판 데이터를 가져오는 비동기 함수
async function fetchStoreBoardData(req: boardSearchOptionData) {
  let queryParams: any = {
    page: req.page,
  };

  if (req.address.length > 0) {
    queryParams.address = req.address;
  }

  if (req.searchType.length > 0) {
    queryParams.searchType = req.searchType.join('#');
  }

  queryParams.sortType = req.sortType;

  const queryString = queryStringLibrary.stringify(queryParams);
  let fullQueryString = `/list/stores?${queryString}`;

  console.log('query:', fullQueryString);

  try {
    const { data } = await boardApiList.getBoardList(fullQueryString);

      // pageCount 1, 첫 검색시, 초기화
      if(Number(req.page) === 1 ){
        if(data.length ===0){  // 첫 검색인데 데이터 없을시
          req.setToast(true);  // 데이터 없다고 띄우기
          req.setResData([])   // 데이터 초기화
        }else{                        // 검색해서 받은 데이터 있는 경우
          let temp = [];
          temp.push(data)             // 데이터 가공
          req.setResData(temp)        // 받은 데이터 저장
          req.setToast(false);
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
          req.setToast(false);
        } 
      }
    
    return data;
  } catch (error) {
    console.log(error)
  }
}

export function useGetStoreBoardListdData(req: boardSearchOptionData) {
  const queryKey = ['boardData', req.page, req.address, req.searchType, req.sortType];

  // useQuery 훅을 사용
  return useInfiniteQuery(queryKey, () => fetchStoreBoardData(req), {
    getNextPageParam: (lastPage, pages) => {
      // 페이지 번호를 pageCount로 설정
      return req.page+1;
    },
  });
}