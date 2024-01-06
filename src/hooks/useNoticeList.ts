import { useEffect, useState } from "react";
import { getNoticeList } from "../apis/controller/noticePage";
import { NoticeListDto } from "../types/apiTypes";
const useNoticeList = (type: number, keyworld: String) => {
  const [noticeList, setNoticeList] = useState<NoticeListDto[] | null>(null);

  const fetchData = async () => {
    try {
      const data = await getNoticeList(type, keyworld);
      setNoticeList(data);
    } catch (error) {
      console.error("Error fetching notice list:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type, keyworld]);

  return { noticeList, setNoticeList };
};

export default useNoticeList;
