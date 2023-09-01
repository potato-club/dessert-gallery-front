import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Wrapper from "../../src/container/loginPage/components/Wrapper";
import { useSignupDataState } from "../../src/recoil/login/signupStateAtom";
import { useJWTState } from "../../src/recoil/login/JWTStateAtom";

const Kakao = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useSignupDataState();
  const [jwtState, setJwtState] = useJWTState();
  useEffect(() => {
    const fetchData = async () => {
      let code = new URL(window.location.href).searchParams.get("code");

      if (code !== undefined) {
        try {
          const response: any = await axios.get(
            `https://api.dessert-gallery.site/users/login/kakao?code=${code}`
          );
          console.log(response.data);
          console.log();
          setSignUpData({
            ...signUpData,
            email: response.data.email,
            loginType: "KAKAO",
          });

          if (response.data.responseCode === "200") {
            // 여기는 로그인 처리 후 메인페이지로
            console.log(200);
            const accessToken = response.headers.get("Authorization");
            const refreshToken = response.headers.get("Refreshtoken");
            setJwtState({
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
            router.push("/");
          } else if (response.data.responseCode === "201") {
            // 여기는 신규 회원이니 회원가입으로
            console.log(201);
            router.replace({
              pathname: "/login/pick",
            });
          } else {
            console.log("에러", response.data.responseCode);
          }
        } catch (error) {
          console.log("Error occurred:", error);
        }
      }
    };

    const response = fetchData();
  }, []);
  return <Wrapper>카카오 로그인 테스트 페이지</Wrapper>;
};

export default Kakao;
