import { browserName } from "react-device-detect";

export function useIsDesktopSafari(): boolean {
  return browserName === "Safari";
}
