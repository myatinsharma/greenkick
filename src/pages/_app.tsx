import { testOrder } from "@/constants/app";
import { OrderContextProvider } from "@/contexts/OrderContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrderContextProvider>
      <Component {...pageProps} />
    </OrderContextProvider>
  );
}
