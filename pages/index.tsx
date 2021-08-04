import { SubscribeNowSection, UnboxYourCreativitySection } from "../components";
import { AsFeaturedInSection } from "../components/as-featured-in-section";
import { ConnectSloganSection } from "../components/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/follow-us-on-instagram-section";
import { FormerArtistsSection } from "../components/former-artists-section";
import { HeroSliderSection } from "../components/hero-slider-section";
import { JoinTheArtCrewSection } from "../components/join-the-art-crew-section";
import { Layout } from "../components/layout";
import { ImageSection } from "../components/image-section";
import { UpcrateAsGiftSection } from "../components/upcrate-as-a-gift";
import { UpcrateBattleSection } from "../components/upcrate-battle-section";
import { WhatTheArtCrewSaysSection } from "../components/what-the-artcrew-says-section";
import { WhyUpcrateSection } from "../components/why-upcrate-section";
import { FormerCratesInARowSection } from "../components/former-crates-in-a-row-section";

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
      <UnboxYourCreativitySection className="bg-purple" />
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
