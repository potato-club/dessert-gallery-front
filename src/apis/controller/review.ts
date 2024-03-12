import sendApi from "../sendApi";

interface postReviewPropsI {
  storeId: number
  req: FormData
}


export const postReview = async ({storeId, req}: postReviewPropsI) => {
  const res = await sendApi.post(`/reviews/stores/${storeId}`, req);
  return res.data;
};

export const postTestReview = async (req: FormData) => {
  const res = await sendApi.post(`/reviews/test`, req);
  return res.data;
};