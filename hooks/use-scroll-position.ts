import * as React from "react";

export function useScrollPosition() {
  const [scrollTop, setScrollTop] = React.useState(0);
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return {
    scrollTop,
    scrolling,
  };
}
