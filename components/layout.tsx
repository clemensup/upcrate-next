import Head from "next/head";
import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Upcrate.art</title>
        <meta name="description" content="Unbox your creativity" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="mx-auto overflow-x-hidden">{children}</main>
      <Footer />
      <div id="modal-root"></div>
    </div>
  );
}
