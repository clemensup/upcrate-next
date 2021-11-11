import React from "react";
import { browserName } from "react-device-detect";

export function useIsDesktopSafari(): boolean {
  const [browser, setBrowser] = React.useState("");

  React.useEffect(() => {
    if (!browser) {
      setBrowser(browserName);
    }
  }, []);

  return browser === "Safari";
}
