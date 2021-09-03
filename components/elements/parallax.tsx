import React from "react";

import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useWindowSize } from "../../hooks/use-window-size";

type ParallaxProps = {
  className?: string;
  offset?: number;
};

export function Parallax({
  children,
  offset = 50,
}: React.PropsWithChildren<ParallaxProps>): JSX.Element {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = React.useState(0);
  const [clientHeight, setClientHeight] = React.useState(0);
  const ref = React.useRef(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });
  const { width } = useWindowSize();

  React.useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion || width < 500) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
