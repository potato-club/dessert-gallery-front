import { useEffect, useState } from "react";
import { NoticeListDto } from "../types/apiTypes";
import { addNoticeList } from "../apis/controller/noticePage";
const useAddNoticeList = (type: number, keyworld: string, last: number) => {
  const [newNoticeList, setNewNoticeList] = useState<NoticeListDto[] | null>(
    null
  );

  const getNewNoticeData = async () => {
    try {
      const data = await addNoticeList(type, keyworld, last);
    } catch (error) {
      console.error("Error fetching notice list:", error);
    }
  };
  return getNewNoticeData();
};

export default useAddNoticeList;
