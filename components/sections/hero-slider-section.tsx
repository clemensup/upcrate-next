import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaptainCrateSvg } from "../elements/svg";
import { Button } from "../elements/button";
import { ArrowSvg } from "../elements/svg/arrow-svg";
import Image from "next/image";
import { motion } from "framer-motion";

function SliderArrow({
  variant,
  onClick,
}: {
  variant: "prev" | "next";
  onClick?: any;
}) {
  return (
    <motion.div
      className={`absolute top-1/2 hidden md:block left-10 z-10 ${
        variant === "next" && "hidden md:block right-10 left-auto"
      }`}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.8 }}
    >
      <button
        onClick={onClick}
        className={variant === "next" ? `transform rotate-180` : ""}
      >
        <ArrowSvg />
      </button>
    </motion.div>
  );
}

function Slide({ background, image }: { background: string; image: string }) {
  return (
    <div
      className={`md:px-10 pt-6 pb-20 relative bg-${background} flex justify-center items-center`}
    >
      <CaptainCrateSvg
        variant="head-only"
        className="hidden md:block w-7 text-purple-dark absolute xl:top-1 lg:left-16"
      />
      <Image src={image} alt="" width={1704} height={855.35} />
      <div className="flex flex-col absolute top-0 right-0 bottom-0 left-0 text-purple-dark items-center justify-center">
        <h3 className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-display">
          Mystery
          <br /> Art Supplies
          <br /> in a monthly
          <br />
          <span className="text-white">Box</span>
        </h3>
        <div className="flex md:gap-10 flex-col md:flex-row md:mt-10">
          <Button
            variant="default"
            className="bg-purple text-white"
            href="https://shop.upcrate.art/subscribe"
          >
            Subscribe Now
          </Button>
          <Button
            variant="default"
            className="bg-pink text-white text-xl"
            href="https://shop.upcrate.art/de/product/upcrategift/"
          >
            Give a gift
          </Button>
        </div>
      </div>
    </div>
  );
}

export const HeroSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow variant="next" />,
    prevArrow: <SliderArrow variant="prev" />,
  };

  return (
    <Slider {...settings}>
      <Slide background="rose" image="/home/hero-slider/slide-01.png" />
      <Slide background="green" image="/home/hero-slider/slide-02.png" />
      <Slide background="purple" image="/home/hero-slider/slide-03.png" />
      <Slide background="pink" image="/home/hero-slider/slide-04.png" />
      <Slide background="orange" image="/home/hero-slider/slide-05.png" />
    </Slider>
  );
};

export function HeroSliderSection() {
  return (
    <section className="relative">
      <HeroSlider />
      <div className="hidden md:block absolute bottom-0 text-white md:text-2xl text-center p-5 text-center left-0 right-0">
        Hop on board to discover amazing art treasures in a monthly
        subscription, inspiring you to create.
      </div>
    </section>
  );
}
