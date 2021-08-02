import React from "react";
import { ArrowSvg } from "./elements/svg/arrow-svg";

function SpeechBubble({
  children,
  author,
}: React.PropsWithChildren<{ author: string }>) {
  return (
    <div className="mt-10">
      <div className="border-2 border-purple-dark px-5 py-12">{children}</div>
      <span className="author text-xl">{author}</span>
    </div>
  );
}

export function WhatTheArtCrewSaysSection() {
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
    <section className="text-center text-purple-dark pt-6 pb-6 px-10 md:px-32 md:pt-20 md:pb-24">
      <h3 className="font-display text-2xl md:text-5xl">
        what the art crew says:
      </h3>
      <p className="mt-8 text-xl">
        If you want to send us a review about upcrate just
        <br /> send us a DM on instagram:)
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
          <SpeechBubble author="Kaia">
            “I use Upcrate to fuel my creativity and experience new art
            supplies. Each crate is like a little treasure chest I find on my
            doorstep every month.”
          </SpeechBubble>
        )}
        {activeSlide === 1 && (
          <SpeechBubble author="Multicooleur">
            “Upcrate is the first art supply box I have ever tried and that I
            recommend to everyone. You’ll find all you need to make an awesome
            piece of art and discover new mediums . I personally enjoy the
            little extras, they never fail to surprise me !”
          </SpeechBubble>
        )}
        {activeSlide === 2 && (
          <SpeechBubble author="Karolien">
            “I love how upcrate surprises me every month by letting explore art
            suplies that I never would consider to try out. I get out of my
            comfort zone discover new media and found new art supplies that I
            love.”
          </SpeechBubble>
        )}
        {activeSlide === 3 && (
          <SpeechBubble author="Sönke">
            “Upcrate is like a grab bag full of high quality art supplies. Every
            month I look forward to the challenge of creating an artwork for the
            #upcratebattle with new, partly unknown art supplies.”
          </SpeechBubble>
        )}
      </div>
      <div className="md:flex align-center justify-center gap-20 md:text-3xl relative hidden">
        <SpeechBubble author="Kaia">
          “I use Upcrate to fuel my creativity and experience new art supplies.
          Each crate is like a little treasure chest I find on my doorstep every
          month.”
        </SpeechBubble>

        <SpeechBubble author="Multicooleur">
          “Upcrate is the first art supply box I have ever tried and that I
          recommend to everyone. You’ll find all you need to make an awesome
          piece of art and discover new mediums . I personally enjoy the little
          extras, they never fail to surprise me !”
        </SpeechBubble>

        <SpeechBubble author="Karolien">
          “I love how upcrate surprises me every month by letting explore art
          suplies that I never would consider to try out. I get out of my
          comfort zone discover new media and found new art supplies that I
          love.”
        </SpeechBubble>

        <SpeechBubble author="Sönke">
          “Upcrate is like a grab bag full of high quality art supplies. Every
          month I look forward to the challenge of creating an artwork for the
          #upcratebattle with new, partly unknown art supplies.”
        </SpeechBubble>
      </div>
    </section>
  );
}
