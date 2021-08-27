import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React from "react";
import { RadialGradient } from "../elements/radial-gradient";
import { CaptainCrateSvg } from "../elements/svg";
import { UnboxYourCreativitySvg } from "../elements/svg/unbox-your-creativity";

export function AnimatedUnboxYourCreativitySection() {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 3600]);
  const rotation = useSpring(yRange, { stiffness: 400, damping: 200 });

  return (
    <section className="hidden md:flex flex-col bg-purple justify-center items-center py-44 relative overflow-hidden">
      <RadialGradient className="bg-pink" variant="center" />
      <RadialGradient className="bg-orange" variant="bottom-right" />
      <RadialGradient className="bg-orange" variant="top-left" />
      <div className="z-10 relative text-purple-dark flex text-purple-dark justify-center items-center flex-col">
        <motion.div style={{ rotate: rotation }}>
          <CaptainCrateSvg variant="head-only" width={100} />
        </motion.div>
        <UnboxYourCreativitySvg />
        <img
          src="/home/unbox-your-creativity/unbox-box.png"
          className="-my-44"
        />
      </div>
    </section>
  );
}
