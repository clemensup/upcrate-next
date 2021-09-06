import React from "react";
import { Parallax } from "../elements/parallax";
import { RadialGradient } from "../elements/radial-gradient";
import { CaptainCrateSvg } from "../elements/svg";

export function ConnectSloganSection({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd bg-purple pt-32 pb-20 relative overflow-hidden px-10">
      <div className="z-10 relative text-center flex justify-center flex-col items-center gap-10">
        {children}
        <Parallax>
          <CaptainCrateSvg variant="signature" />
        </Parallax>
      </div>
      <RadialGradient className="bg-green" variant="center" />
    </section>
  );
}
