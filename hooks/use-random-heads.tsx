import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { CaptainCrateSvg } from "../components";
import { getRandomInt } from "../utils/get-random-int";

const colors = ["pink", "red", "purple", "green", "orange"];

export function useRandomHeads() {
  const randomPosition = () => ({
    top: getRandomInt(0, 100) + "%",
    left: getRandomInt(0, 100) + "%",
  });

  const [heads, setHeads] = React.useState([]);

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setHeads((heads) => [
        ...heads,

        <AnimatePresence key={Math.random()}>
          <motion.div
            className="absolute"
            style={randomPosition()}
            animate={{
              opacity: [0, 1],
              scale: [0, getRandomInt(0.5, 4), 1],
              rotate: [getRandomInt(0, 380), 0],
            }}
            exit={{ opacity: 0 }}
          >
            <CaptainCrateSvg
              className={`text-${colors[getRandomInt(0, colors.length - 1)]}`}
              variant="head-only"
            />
          </motion.div>
        </AnimatePresence>,
      ]);
      () => clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [heads]);

  return heads;
}
