import { Caret, UnboxYourCreativitySection } from "../components";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { HeroSliderSection } from "../components/sections/hero-slider-section";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { Layout } from "../components/layout";
import { ImageSection } from "../components/sections/image-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { WhyUpcrateSection } from "../components/sections/why-upcrate-section";
import { HowItWorksSection } from "../components/sections/how-it-works-section";

export default function HowItWorks() {
  return (
    <Layout>
      <HeroSliderSection />
      <JoinTheArtCrewSection />
      <ImageSection bg="how-it-works/image-section" variant="xs" />
      <HowItWorksSection />
      <FlowingHeads className="bg-green-dark" />
      <WhyUpcrateSection />
      <UpcrateAsGiftSection />
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white">
          We connect{" "}
          <span className="font-display">
            artists worldwide
            <br />
            to draw together
          </span>{" "}
          as one <span className="font-display">and</span>
          to get to <span className="font-display">the heart of the art</span>
        </h4>
      </ConnectSloganSection>
      <ImageSection bg="how-it-works/image-section" />
      <FollowUsOnInstagramSection />
      <UnboxYourCreativitySection className="bg-purple">
        <h3 className="text-white text-4xl mx-auto text-center max-w-4xl font-bold">
          You are one of the chosen ones who scrolled all the way down! Check
          out Captain Crate’s offers here:
        </h3>
        <a
          className="bg-rose font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 text-white px-10 mx-auto"
          href="/subscriptions"
        >
          Subscribe now &nbsp;
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
