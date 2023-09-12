import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useState(() => new QueryClient())[0];

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
