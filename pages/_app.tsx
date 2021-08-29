import { motion } from "framer-motion";
import React from "react";
import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const ref = React.useRef();
  const [_, setShowLoading] = React.useState(true);

  React.useEffect(() => {
    if (!ref.current) {
      setShowLoading(true);
    }
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref}>
      <Layout>
        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </div>
  );
}

export default MyApp;
