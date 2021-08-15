import Image from "next/image";
import React from "react";

interface SubscribeNowSectionProps {
  className?: string;
}

export function UnboxYourCreativitySection({
  children,
  className,
}: React.PropsWithChildren<SubscribeNowSectionProps>): JSX.Element {
  return (
    <section className={`text-center p-10 sm:p-40 ${className}`}>
      <Image src="/unbox-your-creativity.svg" width="280" height="100%" />

      {children}
    </section>
  );
}
