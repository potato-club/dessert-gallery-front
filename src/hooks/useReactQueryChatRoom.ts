import {
  getChatHistory,
  getChatRoom,
  postChatRoom,
} from "../apis/controller/chatPage";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGueryGetChatRoom = () => {
  return useQuery("getChatRoom", () => getChatRoom());
};

export const useGueryGetChatHistory = (roomId: number) => {
  return useQuery("getChatHistory", () => getChatHistory(roomId));
};

export const useMutationPostChatRoom = (storeId: number) => {
  const queryClient = useQueryClient();
  return useMutation("postChatRoom", () => postChatRoom(storeId), {
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getChatRoom"] });
    },
  });
};
