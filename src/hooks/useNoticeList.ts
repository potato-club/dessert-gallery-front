import { useEffect, useState } from "react";
import { getNoticeList } from "../apis/controller/noticePage";
import { NoticeListDto } from "../types/apiTypes";

const useNoticeList = () => {
  const [noticeList, setNoticeList] = useState<NoticeListDto[] | null>(null);

  const fetchData = async () => {
    try {
      const data = await getNoticeList();
      setNoticeList(data);
    } catch (error) {
      console.error("Error fetching notice list:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return noticeList;
};

export default useNoticeList;
