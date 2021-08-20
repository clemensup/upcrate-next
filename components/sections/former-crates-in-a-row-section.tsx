import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowSvg } from "../elements/svg/arrow-svg";
import React from "react";
import { useWindowSize } from "../../hooks/use-window-size";
import useTranslation from "next-translate/useTranslation";

function SliderArrow({
  variant,
  onClick,
}: {
  variant: "prev" | "next";
  onClick?: any;
}) {
  return (
    <div
      className={`absolute top-1/2 -mt-20 md:block text-white z-10 ${
        variant === "next" ? "md:block -right-10" : "-left-10"
      }`}
    >
      <button
        onClick={onClick}
        className={variant === "next" ? `transform rotate-180` : ""}
      >
        <ArrowSvg />
      </button>
    </div>
  );
}

function Slide({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`${className} md:px-10 pt-6 md:pb-20 relative flex justify-center items-center`}
    >
      {children}
    </div>
  );
}

export function TripleSlider() {
  const { width } = useWindowSize();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: width < 767 ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrow variant="next" />,
    prevArrow: <SliderArrow variant="prev" />,
  };

  const slides = Array.from(Array(20).keys());

  return (
    <Slider {...settings} className="md:mt-20 -mx-10 md:mx-0">
      {slides.map((slide) => (
        <Slide
          key={slide + 1}
          className="flex flex-col gap-5 text-xl md:text-3xl"
        >
          <img src={`/home/former-crates/upcrate${slide + 1}.png`} />
          <p>#upcrate{slide + 1}</p>
        </Slide>
      ))}
    </Slider>
  );
}

export function FormerCratesInARowSection() {
  const { t } = useTranslation("common");

  return (
    <section className="text-center text-rose bg-purple py-6 sm:px-10 md:px-32 md:pt-20 md:pb-24">
      <h3 className="font-display text-2xl md:text-5xl">
        {t("sections.former_crates_in_a_row.title")}
      </h3>
      <TripleSlider />
    </section>
  );
}
