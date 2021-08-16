import React from "react";
import Image from "next/image";
import { CaptainCrateSvg } from "../elements/svg";

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
  const [imageHeight, setImageHeight] = React.useState(560);
  const mobileImageRef = React.useRef<HTMLDivElement>();
  const desktopImageRef = React.useRef<HTMLDivElement>();

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setImageHeight(event.currentTarget.height);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (mobileImageRef.current.clientHeight) {
        setImageHeight(mobileImageRef.current.clientHeight);
      } else if (desktopImageRef.current.clientHeight) {
        setImageHeight(desktopImageRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ height: imageHeight }}
      className={`${className} px-20 pt-0 relative mb-20`}
    >
      <div className="absolute left-10 right-10 top-10" style={{ height: 500 }}>
        <CaptainCrateSvg
          width={24}
          variant="head-only"
          className="ml-3 -mt-3 hidden sm:block text-purple-dark"
        />
        <h1 className="text-white text-3xl absolute z-20 top-12 left-20">
          {title}
        </h1>
        <div className="sm:hidden" ref={mobileImageRef}>
          <Image
            src={mobileImage}
            layout="responsive"
            height={619}
            width={457}
            onLoad={(event) => handleImageLoad(event)}
          />
        </div>
        <div className="hidden sm:block -mt-3" ref={desktopImageRef}>
          <Image
            src={image}
            layout="responsive"
            width={1700}
            height={739}
            onLoad={(event) => handleImageLoad(event)}
          />
        </div>
      </div>
    </div>
  );
}
