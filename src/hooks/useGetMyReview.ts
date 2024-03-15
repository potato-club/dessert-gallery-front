import { useEffect, useState } from "react";
import { getMyReview } from "../apis/controller/reviewPage";
import { MyReviewDto } from "../types/apiTypes";
import { MyReviewWhole } from "../types/apiTypes";

const useGetMyReview = (page: number, month: number) => {
  const [myReview, setMyReview] = useState<MyReviewDto[] | null>(null);

  const fetchData = async () => {
    try {
      const data = await getMyReview(page, month);
      setMyReview(data.data.content);
    } catch (error) {
      console.error("Error fetching notice list:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, month]);

  return myReview;
};

export default useGetMyReview;
