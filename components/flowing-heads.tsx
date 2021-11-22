import Ticker from "react-ticker";
import { CaptainCrateSvg } from "./elements/svg";

export function FlowingHeads({ className }: { className?: string }) {
  return (
    <div className={`${className} pb-2 pt-3 overflow-hidden`}>
      <Ticker>
        {() => (
          <span className="inline-block mx-1">
            <CaptainCrateSvg variant="head-only" />
          </span>
        )}
      </Ticker>
    </div>
  );
}
