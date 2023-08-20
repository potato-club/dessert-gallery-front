import sendApi from "../sendApi";

export const boardApiList = {
  getBoardList: (req:string) => {
    return sendApi.guestGet(req);
  },
} 