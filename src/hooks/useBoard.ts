import { getDetailPoster } from "../../pages/api/detailStore";
import { useQuery } from "react-query";

const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGFlaGRyYnM1ODBAbmF2ZXIuY29tIiwicm9sZXMiOiJNQU5BR0VSIiwiaWF0IjoxNjkyNzczOTQ1LCJleHAiOjE2OTI3NzU3NDV9.7oQ5Y78WrO2q8Lk4iuGqq7yGq83uDuMgW3sB9Eso72E";
export const useGetDetailBoard = (options = {}, boardId: number) => {
  const { data } = useQuery(
    ["detailBoard", boardId],
    () => getDetailPoster(boardId, accessToken),
    {
      ...options,
    }
  );

  return data;
};
