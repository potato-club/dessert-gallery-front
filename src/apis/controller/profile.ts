import axios from "axios";
import sessionStorageService from "../../libs/sessionStorageService";
import sendApi from "../sendApi";

export const propfileApiList = {
    getStoreProfile: async () => {
        console.log("getStoreProfile")
      try {
        const res = (await sendApi.get('/stores')).data;
        return {res};
        } catch (error) {
          return {res:'noneStore'}
      }
    },
      putUpdateStoreProfile: async ({sendFormData,id}: {sendFormData: FormData, id:number}) => {
      try {
        return (await sendApi.put(`/stores/${id}`, sendFormData)).data;
        } catch (error) {
      }
    },
    PostCreateStore: async (sendFormData: FormData) => {
    try {
      return (await sendApi.post(`/stores`, sendFormData)).data;
      } catch (error) {
    }
  },
  } 


 

export const putUser = async (sendFormData: FormData) => {
    const res = await axios.put('https://api.dessertgallery.site/users', sendFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `${sessionStorageService.get('JWTSessionStorage', "accessToken")}`,
        },
      });

      console.log("\n\n\nres", res)
  return res.data
}


export const getCheckNicknamme = async (nicknameString: string) => {
  const res = await axios.get(`https://api.dessertgallery.site/users/duplication/nickname?nickname=${nicknameString}`, {
      headers: {
        'Authorization': `${sessionStorageService.get('JWTSessionStorage', "accessToken")}`,
      },
    });

    console.log("\n\n\n getCheckNicknamme res", res)
return res.data
}

// export const getStoreProfile = async () => {
//     const res = await sendApi.get('/stores');

//       console.log("\n\n\nres", res)
// }