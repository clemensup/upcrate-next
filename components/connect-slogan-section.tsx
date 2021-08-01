import React from "react";
import { CaptainCrateSvg } from "./elements/svg";

export function ConnectSloganSection({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-purple text-center flex justify-center flex-col items-center gap-10 pt-32 pb-20">
      {children}
      <CaptainCrateSvg variant="signature" />
    </div>
  );
}
