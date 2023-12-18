import sendApi from "../sendApi";
import { PostNoticeParam } from "../../types/apiTypes";

export const getNoticeList = async (type: number, keyworld: String) => {
  const res = await sendApi.get(
    `/notices/myStore?type=${type}&keyword=${keyworld}`
  );
  return res.data.content;
};

export const deleteNotice = async (id: number) => {
  try {
    const response = await sendApi.delete(`/notices/${id}`);
    if (response) {
      alert("공지글 삭제가 완료되었습니다");
    }
  } catch (error) {
    alert("잠시후에 다시 시도해주세요.");
  }
};

export const modifyNotice = async (
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
  } catch (error) {
    alert("잠시후에 다시 시도해주세요.");
  }
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
