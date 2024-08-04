import { atom } from 'recoil';

interface accountInfo{
  isLogin: boolean
  nickname: string|null,
  loginType: "NORMAL"| "KAKAO"|null,
  userRole: "USER"|"MANAGER"|null,
  storeId: number|null,
  fileName: string|null,
  fileUrl: string|null
}

/** user 계정 정보를 담는 state 
 * @param "isLogin": "bool",
 * @param "isLogin": false -> 이하 기본 값 null,
 * @param "nickname": "string",
 * @param "loginType": "NORMAL / KAKAO ",
 * @param "userRole": "USER / MANAGER",
 * @param "storeId": 1,(userRole: USER -> null)
 * @param "fileName": "string",(X -> null)
 * @param "fileUrl": "string"(X -> null)
 * */ 
export const accountInfoState = atom<accountInfo>({
  key: 'accountInfoState',
  default: {
    isLogin: false,
    nickname: null,
    loginType: null,
    userRole: null,
    storeId: null,
    fileName:null,
    fileUrl: null
}});