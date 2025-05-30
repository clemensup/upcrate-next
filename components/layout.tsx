import React from "react";
import Head from "next/head";
import { Footer } from "./footer";
import { Header } from "./header";
import { browserName } from "react-device-detect";

const BrowserContext = React.createContext(browserName);

export function useBrowserContext() {
  return React.useContext(BrowserContext);
}

export function Layout({ children }): JSX.Element {
  return (
    <div>
      <BrowserContext.Provider value={browserName}>
        <Head>
          <title>Upcrate.art</title>
          <meta name="description" content="Unbox your creativity" />
          <link rel="icon" href="/favicon.png" />
          <meta
            name="google-site-verification"
            content="2EeboCOoxIj0bB_9UPHG5M9fYqaXnHP9LF0nBDRDodU"
          />
        </Head>

        <Header />
        <main className="mx-autow">{children}</main>
        <Footer />
      </BrowserContext.Provider>
    </div>
  );
}
