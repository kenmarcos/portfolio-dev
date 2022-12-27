import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";

import { Header } from "components/Header";
import "styles/global.scss";
import "animate.css";
import { Footer } from "components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Toaster
        toastOptions={{
          position: "bottom-left",
          style: {
            backgroundColor: "#525252",
            color: "#f6f6f6",
            borderRadius: "20px",
          },
        }}
      />
    </>
  );
}
