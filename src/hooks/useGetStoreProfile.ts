import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { propfileApiList } from "../apis/controller/profile";


export const useStoreInfo = async () => {
    try {
        const res = await propfileApiList.getStoreProfile()
        return {res};
    } catch (error) {
        return 'noneStore'
    }
  };
  