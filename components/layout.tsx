import Head from "next/head";
import { CookieBanner } from "./elements/cookie-banner";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Upcrate.art</title>
        <meta name="description" content="Unbox your creativity" />
        <link rel="icon" href="/favicon.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            
            dataLayer.push({
              'event': 'default_consent'
            });
`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K9XXRNF');
          `,
          }}
        />
      </Head>
      <Header />
      <main className="mx-autow">{children}</main>
      <Footer />
      <div id="modal-root"></div>
      <CookieBanner />
    </div>
  );
}
