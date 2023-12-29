import sendApi from "../sendApi";
import { PostNoticeParam } from "../../types/apiTypes";

export const getNoticeList = async (type: number, keyworld: String) => {
  const res = await sendApi.get(
    `/notices/myStore?type=${type}&keyword=${keyworld}`
  );
  return res.data.content;
};

export const addNoticeList = async (
  type: number,
  keyworld: string,
  last: number
) => {
  const res = await sendApi.get(
    `/notices/myStore?type=${type}&keyworld=${keyworld}&last=${last}`
  );
  return res.data.content;
};

export const deleteNotice = async (id: number) => {
  const response = await sendApi.delete(`/notices/${id}`);
  if (response) {
    alert("공지글 삭제가 완료되었습니다");
  }
};

export const modifyNoticeApi = async (
  { title, content, exposed, typeKey }: PostNoticeParam,
  id: number
) => {
  try {
    const response = await sendApi.put(`/notices/${id}`, {
      title,
      content,
      exposed,
      typeKey,
    });
    if (response) {
      alert("공지글 수정이 완료되었습니다");
    }
  } catch (error) {
    alert("잠시후에 다시 시도해주세요.");
  }
};

export const modifyGetNoticeApi = async (noticeId: number) => {
  const res = await sendApi.get(`/notices/${noticeId}`);
  return res;
};

export const postNoticeApi = async ({
  title,
  content,
  exposed,
  typeKey,
}: PostNoticeParam) => {
  try {
    const response = await sendApi.post(`/notices/myStore`, {
      title,
      content,
      exposed,
      typeKey,
    });

    if (response) {
      alert("공지글 작성이 완료되었습니다");
    }
  } catch (error) {
    alert("잠시후에 다시 시도해주세요");
  }
};
