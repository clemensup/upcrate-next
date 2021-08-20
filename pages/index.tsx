import {
  CaptainCrateSvg,
  Caret,
  SubscribeNowSection,
  UnboxYourCreativitySection,
} from "../components";
import { AsFeaturedInSection } from "../components/sections/as-featured-in-section";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FeaturedArtistsWeWorkedWithSection } from "../components/sections/former-artists-section";
import { HeroSliderSection } from "../components/sections/hero-slider-section";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { Layout } from "../components/layout";
import { ImageSection } from "../components/sections/image-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { UpcrateBattleSection } from "../components/sections/upcrate-battle-section";
import { WhatTheArtCrewSaysSection } from "../components/sections/what-the-artcrew-says-section";
import { WhyUpcrateSection } from "../components/sections/why-upcrate-section";
import { FormerCratesInARowSection } from "../components/sections/former-crates-in-a-row-section";
import { UnboxYourCreativitySvg } from "../components/elements/svg/unbox-your-creativity";
import { RadialGradient } from "../components/elements/radial-gradient";
import useTranslation from "next-translate/useTranslation";
import { FormattedText } from "../components/elements/formatted-text";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HeroSliderSection />
      <JoinTheArtCrewSection />
      <SubscribeNowSection />
      <WhyUpcrateSection />
      <UpcrateAsGiftSection />
      <FlowingHeads className="bg-green-dark" />
      <ImageSection variant="small" bg="cpt-in-forest" />
      <WhatTheArtCrewSaysSection />
      <section className="hidden md:flex flex-col bg-purple justify-center items-center py-44 relative overflow-hidden">
        <RadialGradient className="bg-pink" variant="center" />
        <RadialGradient className="bg-orange" variant="bottom-right" />
        <RadialGradient className="bg-orange" variant="top-left" />
        <div className="z-10 relative text-purple-dark">
          <CaptainCrateSvg variant="head-only" width={100} />
          <UnboxYourCreativitySvg />
          <img
            src="/home/unbox-your-creativity/unbox-box.png"
            className="-my-44"
          />
        </div>
      </section>
      <ImageSection bg="leuchtturm" variant="medium" />
      <FlowingHeads className="bg-purple" />
      <AsFeaturedInSection />
      <FormerCratesInARowSection />
      <FeaturedArtistsWeWorkedWithSection />
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white whitespace-pre-line">
          <FormattedText
            transKey="common:pages.home.draw_as_one_section"
            delimiter={[<span className="font-display" />, <br />]}
          />
        </h4>
      </ConnectSloganSection>
      <UpcrateBattleSection />
      <ImageSection bg="cotman-tubes" />
      <FollowUsOnInstagramSection />
      <UnboxYourCreativitySection className="bg-pink">
        <h3 className="text-purple-dark text-4xl mx-auto text-center max-w-5xl font-bold whitespace-pre-line">
          {t("pages.home.chosen_one_section.title")}
        </h3>
        <a
          className="bg-purple hover:bg-purple-dark font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 text-white px-10 mx-auto gap-4"
          href="/subscriptions"
        >
          {t("pages.home.chosen_one_section.cta")}
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
