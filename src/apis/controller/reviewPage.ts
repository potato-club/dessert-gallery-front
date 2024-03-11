import sendApi from "../sendApi";

export const getMyReview = async (page: number, month: number) => {
  const res = await sendApi.get(`/reviews/mine?page=${page}&?month=${month}`);
  return res;
};

export const deleteReview = async (id: number) => {
  const response = await sendApi.delete(`/reviews/${id}`);
  if (response) {
    alert("리뷰가 삭제 상태로 변경 되었습니다");
  }
};
