import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { JWTStateAtom } from "../src/recoil/login/JWTStateAtom";
import { useEffect } from "react";

const Home = () => {
  // jwt 토큰 저장 확인 테스트용 코드
  var jwtValue = useRecoilValue(JWTStateAtom);
  useEffect(() => {
    console.log(jwtValue);
  }, [jwtValue]);

  return <div>mainPage</div>;
};

export default Home;
