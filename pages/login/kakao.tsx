import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Wrapper from "../../src/container/loginPage/components/Wrapper";
import { useSignupDataState } from "../../src/recoil/login/signUpStateAtom";
import { loginPageApi } from "../../src/apis/controller/loginPage";
import { useTokenService } from "../../src/hooks/useTokenService";
import LoginModal from "../../src/container/loginPage/components/LoginModal";

const Kakao = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useSignupDataState();
  const { setToken } = useTokenService();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [kakaoSignupState, setKakaoSignupState] = useState<
    "" | "loginSuccess" | "goToSignup"
  >("");

  useEffect(() => {
    // 현재 reactStrictMode 때문에 useEffect가 두번 작동하면서 정상 로그인 처리 되었음에도 로그인을 실패했다 나오는 현상 있음
    // 첫 번째 작동 -> 성공, 정상적으로 토큰 저장 됨,성공 모달 뜸(실패 모달에 금방 묻혀버림)
    // 두 번째 작동 -> 실패, 실패 모달 뜸
    const fetchData = async () => {
      const code = new URL(window.location.href).searchParams.get("code");

      if (code !== (undefined || null)) {
        try {
          const response: any = await loginPageApi.getKakaoLogin(code);
          console.log(response);

          if (response.data.responseCode === "200") {
            // 여기는 로그인 처리 후 메인페이지로
            console.log(200);
            const accessToken = response.headers.get("Authorization");
            const refreshToken = response.headers.get("Refreshtoken");
            setToken(accessToken, refreshToken);
            setModalMessage("정상 로그인 되었습니다.");
            setIsModalOpen(true);
            setKakaoSignupState("loginSuccess");
          } else if (response.data.responseCode === "201") {
            console.log(201);
            setSignUpData({
              ...signUpData,
              email: response.data.email,
              loginType: "KAKAO",
            });
            setModalMessage("역할과 닉네임을 지정하고 회원가입을 완료해주세요");
            setIsModalOpen(true);
            setKakaoSignupState("goToSignup");
          } else {
            console.log("에러", response.data.responseCode);
            setModalMessage("카카오 로그인에 실패했습니다.");
            setIsModalOpen(true);
          }
        } catch (error) {
          console.log("Error occurred:", error);
          setModalMessage("카카오 로그인에 실패했습니다.");
          setIsModalOpen(true);
        }
      }
    };

    const response = fetchData();
  }, []);

  return (
    <Wrapper>
      <LoginModal
        isOpen={isModalOpen}
        onClickClose={() => setIsModalOpen(false)}
        onClickConfirm={() => {
          if (kakaoSignupState === "loginSuccess") {
            router.replace("/");
          } else if (kakaoSignupState === "goToSignup") {
            router.replace({
              pathname: "/login/pick",
            }); 
          } else {
            router.replace("/");
          }
        }}
      >
        {modalMessage}
      </LoginModal>
    </Wrapper>
  );
};

export default Kakao;
