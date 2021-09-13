import { SubscribeNowSection, UnboxYourCreativitySection } from "../components";
import { AsFeaturedInSection } from "../components/sections/as-featured-in-section";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FeaturedArtistsWeWorkedWithSection } from "../components/sections/featured-artists-section";
import { HeroSliderSection } from "../components/sections/hero-slider-section";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { ImageSection } from "../components/sections/image-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { UpcrateBattleSection } from "../components/sections/upcrate-battle-section";
import { WhatTheArtCrewSaysSection } from "../components/sections/what-the-artcrew-says-section";
import { WhyUpcrateSection } from "../components/sections/why-upcrate-section";
import { FormerCratesInARowSection } from "../components/sections/former-crates-in-a-row-section";
import useTranslation from "next-translate/useTranslation";
import { FormattedText } from "../components/elements/formatted-text";
import Head from "next/head";
import { AnimatedUnboxYourCreativitySection } from "../components/sections/animated-unbox-your-creativity-section";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Home | upcrate</title>
        <meta property="og:title" content="Home | upcrate" key="title" />

        <meta
          property="og:description"
          content={t("pages.home.ogDescription")}
        />
      </Head>
      <HeroSliderSection />
      <JoinTheArtCrewSection />
      <SubscribeNowSection />
      <WhyUpcrateSection />
      <UpcrateAsGiftSection />
      <FlowingHeads className="bg-green-dark" />
      <ImageSection variant="small" bg="cpt-in-forest" />
      <WhatTheArtCrewSaysSection />
      <AnimatedUnboxYourCreativitySection />
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
      <UnboxYourCreativitySection
        className="bg-pink text-purple-dark"
        title={t("pages.home.chosen_one_section.title")}
        buttonColors="bg-purple hover:bg-purple-dark text-white"
      />
    </>
  );
}
