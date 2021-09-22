import { motion } from "framer-motion";
import { Layout } from "../components";
import Script from "next/script";
import "../styles/globals.css";
import { CookieBanner } from "../components/elements/cookie-banner";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=UA-138739008-2`}
      />

      <Script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      });

      gtag('js', new Date());
    
      gtag('config', 'UA-138739008-2');
  `}
      </Script>
      <Layout>
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
      <div id="modal-root"></div>
      <CookieBanner />
    </div>
  );
}

export default MyApp;
