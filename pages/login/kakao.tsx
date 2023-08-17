import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Wrapper from "../../src/container/loginPage/components/Wrapper";
import { useSignUpDataState } from "../../src/recoil/login/signUpStateAtom";

const Kakao = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useSignUpDataState();

  useEffect(() => {
    const fetchData = async () => {
      let code = new URL(window.location.href).searchParams.get("code");

      if (code !== undefined) {
        try {
          const response = await axios.get(
            `https://api.dessert-gallery.site/users/login/kakao?code=${code}`
          );
          console.log(response.data);
          setSignUpData({
            ...signUpData,
            email: response.data.email,
            loginType: "KAKAO",
          });

          if (response.data.responseCode === "200") {
            // 여기는 로그인 처리 후 메인페이지로
            console.log(200);
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
  }, [router, setSignUpData, signUpData]);
  return <Wrapper>카카오 로그인 테스트 페이지</Wrapper>;
};

export default Kakao;
