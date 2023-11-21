import "../styles/globals.css";
import type { AppProps } from "next/app";
import ModalBackground from "../src/components/ModalBackground";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import myPage from "../pages/myPage";
import Header from "../src/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useState(() => new QueryClient())[0];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_API_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    // 스크립트 로드가 완료되면 메인 컴포넌트 렌더링
    script.onload = () => {
      (window as any).kakao.maps.load(function () {});
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps}>
        <RecoilRoot>
          <ModalBackground>
            {Component == myPage ? (
              <Component {...pageProps} />
            ) : (
              <>
                <Header />
                <Component {...pageProps} />
              </>
            )}
          </ModalBackground>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
