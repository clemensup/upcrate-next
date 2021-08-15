import useTranslation from "next-translate/useTranslation";
import {
  Layout,
  HeroSection,
  UnboxYourCreativitySection,
  Caret,
} from "../components";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FormerArtistsSection } from "../components/sections/former-artists-section";
import { TheBottlePostSection } from "../components/sections/the-bottle-post-section";
import { TheGoldenCrateSection } from "../components/sections/the-golden-crate-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { UpcrateBattleSection } from "../components/sections/upcrate-battle-section";
import { ProfessionalHowToVideosSection } from "../components/sections/professional-howto-videos-section";
import { NewsletterSection } from "../components/sections/newsletter-section";

export default function ArtCrew() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HeroSection
        className="bg-rose"
        title={t("pages.artcrew.page_title")}
        image="/artcrew-hero.png"
        mobileImage="/artcrew-hero-xs.png"
      />
      <FlowingHeads className="bg-purple" />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section01 bg-center bg-cover bg-no-repeat"></div>
      <NewsletterSection>
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center m-auto">
          Upcrate – We draw as one
        </h3>
        <p className="text-2xl text-purple-dark md:mt-10 md:mb-20 md:max-w-6xl md:mx-auto">
          Captain Crate has hoisted his sails to bring together a community of
          artists from all over the world and provide them with the best art
          materials and tips. Every month he sends his mysterious boxes, which
          he calls UPCRATE, directly to the front door of every member of his
          art crew.
        </p>
      </NewsletterSection>
      TODO: Invite friends to the art crew and save money together!
      <UpcrateAsGiftSection />
      <UpcrateBattleSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section02 bg-center bg-cover bg-no-repeat"></div>
      <TheGoldenCrateSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section03 bg-center bg-cover bg-no-repeat"></div>
      <TheBottlePostSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section04 bg-center bg-cover bg-no-repeat"></div>
      <FormerArtistsSection />
      <ProfessionalHowToVideosSection />
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white">
          <span className="font-display">We draw artists</span> together
          <br />
          <span className="font-display">with</span> our{" "}
          <span className="font-display">
            creative passion
            <br />
            and give
          </span>{" "}
          you the tools <br />
          to follow <span className="font-display">your heart</span>
        </h4>
      </ConnectSloganSection>
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section05 bg-center bg-contain bg-no-repeat"></div>
      <FollowUsOnInstagramSection />
      <UnboxYourCreativitySection className="bg-rose">
        <h3 className="text-white text-4xl mx-auto text-center max-w-4xl font-bold">
          You are one of the chosen ones who scrolled all the way down! Check
          out Captain Crate’s offers here:
        </h3>
        <a
          className="font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 bg-red hover:bg-green-darker text-white px-10 mx-auto"
          href="/subscriptions"
        >
          Subscribe now &nbsp;
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
