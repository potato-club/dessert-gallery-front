import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Wrapper from "../../src/container/loginPage/components/Wrapper";
import axios from "axios";
import sessionStorageService from "../../src/libs/sessionStorageService";
import { SESSION_KEY } from "../../src/constants/session";

const Reissue = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  useEffect(() => {
    const refreshToken = sessionStorageService.get(SESSION_KEY, "refreshToken");
    const accessToken = sessionStorageService.get(SESSION_KEY, "accessToken");

    const fetchReissue = async () => {
      const reissueResponse: any = await axios.get(`${baseURL}/users/reissue`, {
        headers: {
          refreshToken: refreshToken,
        },
      });
      return reissueResponse;
    };

    try {
      const reissueResponse: any = fetchReissue();

      if (reissueResponse.status === 200) {
        sessionStorageService.set(
          SESSION_KEY,
          JSON.stringify({
            JWTDataState: {
              accessToken: reissueResponse.headers.get("Authorization"),
              refreshToken: reissueResponse.headers.get("Refreshtoken"),
            },
          })
        );
        router.replace(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Wrapper>
      <>123</>
    </Wrapper>
  );
};

export default Reissue;
