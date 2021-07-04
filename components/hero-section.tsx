import React from "react";
import Image from "next/image";
import { CaptainCrateSvg } from "./elements/svg";

interface HeroSectionProps {
  className?: string;
  title: string;
  image: string;
  mobileImage?: string;
}

export function HeroSection({
  className,
  title,
  image,
  mobileImage,
}: React.PropsWithChildren<HeroSectionProps>): JSX.Element {
  return (
    <section className={`relative ${className}`}>
      <div className="container mx-auto pt-5 relative">
        <h1 className="text-3xl text-purple-dark text-center sm:text-left absolute bottom-0 sm:mt-5 sm:mb-0 mb-5 left-0 right-0 sm:left-8 lg:top-10 lg:left-20 z-10">
          {title}
        </h1>
        <div className="container mx-auto relative">
          <CaptainCrateSvg
            variant="head-only"
            className="hidden sm:block absolute z-20 text-purple-dark -top-5 lg:left-3"
            width={24}
          />
        </div>
        <div className="sm:hidden">
          <Image
            src={mobileImage}
            layout="responsive"
            height={619}
            width={457}
          />
        </div>
        <div className="hidden sm:block">
          <Image src={image} layout="responsive" height={739} width={1704} />
        </div>
      </div>
    </section>
  );
}
