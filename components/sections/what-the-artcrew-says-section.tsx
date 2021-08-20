import useTranslation from "next-translate/useTranslation";
import React from "react";
import { RadialGradient } from "../elements/radial-gradient";
import { ArrowSvg } from "../elements/svg/arrow-svg";

function SpeechBubble({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="mt-10">
      <div className="border-2 border-purple-dark px-5 py-12">
        {children[0]}
      </div>
      <span className="author text-xl">{children[1]}</span>
    </div>
  );
}

export function WhatTheArtCrewSaysSection() {
  const { t } = useTranslation("common");
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slide = (nextSlide) => {
    if (activeSlide + nextSlide > 3) {
      return setActiveSlide(0);
    }

    if (activeSlide + nextSlide < 0) {
      return setActiveSlide(3);
    }

    return setActiveSlide(activeSlide + nextSlide);
  };

  return (
    <section className="text-center text-purple-dark pt-6 pb-6 px-10 md:px-32 md:pt-20 md:pb-24 relative overflow-hidden">
      <RadialGradient className="bg-purple" variant="top-right" />
      <RadialGradient className="bg-green left-0" variant="bottom" />
      <div className="z-10 relative">
        <h3 className="font-display text-2xl md:text-5xl">
          {t("sections.what_the_artcrew_says.title")}
        </h3>
        <p className="mt-8 text-xl whitespace-pre-line">
          {t("sections.what_the_artcrew_says.text")}
        </p>
        <div className="align-center justify-center gap-20 md:text-3xl relative md:hidden">
          <button
            className="absolute -mt-10 top-1/2 -left-8"
            onClick={() => slide(-1)}
          >
            <ArrowSvg />
          </button>

          <button
            className="absolute -mt-10 top-1/2 -right-8 transform rotate-180"
            onClick={() => slide(1)}
          >
            <ArrowSvg />
          </button>

          {activeSlide === 0 && (
            <SpeechBubble>
              {t("sections.what_the_artcrew_says.quotes.0.text")}
              {t("sections.what_the_artcrew_says.quotes.0.author")}
            </SpeechBubble>
          )}
          {activeSlide === 1 && (
            <SpeechBubble>
              {t("sections.what_the_artcrew_says.quotes.1.text")}
              {t("sections.what_the_artcrew_says.quotes.1.author")}
            </SpeechBubble>
          )}
          {activeSlide === 2 && (
            <SpeechBubble>
              {t("sections.what_the_artcrew_says.quotes.2.text")}
              {t("sections.what_the_artcrew_says.quotes.2.author")}
            </SpeechBubble>
          )}
          {activeSlide === 3 && (
            <SpeechBubble>
              {t("sections.what_the_artcrew_says.quotes.3.text")}
              {t("sections.what_the_artcrew_says.quotes.3.author")}
            </SpeechBubble>
          )}
        </div>
        <div className="md:flex align-center justify-center gap-20 md:text-3xl relative hidden">
          <SpeechBubble>
            {t("sections.what_the_artcrew_says.quotes.0.text")}
            {t("sections.what_the_artcrew_says.quotes.0.author")}
          </SpeechBubble>

          <SpeechBubble>
            {t("sections.what_the_artcrew_says.quotes.1.text")}
            {t("sections.what_the_artcrew_says.quotes.1.author")}
          </SpeechBubble>

          <SpeechBubble>
            {t("sections.what_the_artcrew_says.quotes.2.text")}
            {t("sections.what_the_artcrew_says.quotes.2.author")}
          </SpeechBubble>

          <SpeechBubble>
            {t("sections.what_the_artcrew_says.quotes.3.text")}
            {t("sections.what_the_artcrew_says.quotes.3.author")}
          </SpeechBubble>
        </div>
      </div>
    </section>
  );
}
