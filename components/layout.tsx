import Head from "next/head";
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
      <main className="mx-autow">{children}</main>
      <Footer />
      <div id="modal-root"></div>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-138739008-2"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-138739008-2'); `,
        }}
      />
    </div>
  );
}
