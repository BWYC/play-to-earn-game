import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CoreBlockchain } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = CoreBlockchain;

  return (
    <ThirdwebProvider
      clientId="65a85b91315ca838d7a8472fb0e64f92"
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
