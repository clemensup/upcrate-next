import {
  CaptainCrateSvg,
  SubscribeNowSection,
  UnboxYourCreativitySection,
} from "../components";
import { AsFeaturedInSection } from "../components/sections/as-featured-in-section";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FormerArtistsSection } from "../components/sections/former-artists-section";
import { HeroSliderSection } from "../components/sections/hero-slider-section";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { Layout } from "../components/layout";
import { ImageSection } from "../components/sections/image-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { UpcrateBattleSection } from "../components/sections/upcrate-battle-section";
import { WhatTheArtCrewSaysSection } from "../components/sections/what-the-artcrew-says-section";
import { WhyUpcrateSection } from "../components/sections/why-upcrate-section";
import { FormerCratesInARowSection } from "../components/sections/former-crates-in-a-row-section";
import Image from "next/image";
import { UnboxYourCreativitySvg } from "../components/elements/svg/unbox-your-creativity";

export default function Home() {
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
      <section className="hidden md:flex flex-col bg-purple justify-center items-center py-44">
        <CaptainCrateSvg variant="head-only" width={100} />
        <UnboxYourCreativitySvg />
        <img
          src="/home/unbox-your-creativity/unbox-box.png"
          className="-my-44"
        />
      </section>
      <ImageSection bg="leuchtturm" variant="medium" />
      <FlowingHeads className="bg-purple" />
      <AsFeaturedInSection />
      <FormerCratesInARowSection />
      <FormerArtistsSection />
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white">
          Let’s draw <span className="font-display">as one.</span>
          <br /> Let’s connect&nbsp;
          <span className="font-display">worldwide</span>
          <br /> and <span className="font-display">live art</span> together
        </h4>
      </ConnectSloganSection>
      <UpcrateBattleSection />
      <ImageSection bg="cotman-tubes" />
      <FollowUsOnInstagramSection />
      <UnboxYourCreativitySection
        className="bg-pink"
        buttonClassName="bg-purple"
      >
        You’re one of the chosen ones who scrolled all the way down.
        <br />
        Now you can also subscribe:)
      </UnboxYourCreativitySection>
    </Layout>
  );
}
