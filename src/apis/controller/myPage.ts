import sendApi from "../sendApi";
import { FormData } from "../../container/myPage/components/Profile";
import queryStringLibrary from 'query-string';

export const getLoginUserInfo = async () => {
  const res = await sendApi.get(`/users`);
  return res.data;
};

export const putUser = async ({nickname, file, userRole, fileName, fileUrl}: FormData) => {
  const dataObject = { nickname, file, userRole, fileName, fileUrl };
  const queryString = queryStringLibrary.stringify(dataObject);
  const res = await sendApi.put(`/users?${queryString}`);
  return res.data
}