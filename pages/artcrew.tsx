import useTranslation from "next-translate/useTranslation";
import { Layout, HeroSection, UnboxYourCreativitySection } from "../components";
import { ConnectSloganSection } from "../components/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/follow-us-on-instagram-section";
import { FormerArtistsSection } from "../components/former-artists-section";
import { UpcrateAsGiftSection } from "../components/upcrate-as-a-gift";
import { UpcrateBattleSection } from "../components/upcrate-battle-section";

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
      TODO: Advantages for members of the art crew <br />
      TODO: Invite friends to the art crew and save money together!
      <UpcrateAsGiftSection />
      <UpcrateBattleSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section02 bg-center bg-cover bg-no-repeat"></div>
      TODO: The golden crate
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section03 bg-center bg-cover bg-no-repeat"></div>
      TODO: The bottlepost
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section04 bg-center bg-cover bg-no-repeat"></div>
      <FormerArtistsSection />
      TODO: Professional How-to-do Videos
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
      <UnboxYourCreativitySection
        className="bg-rose"
        buttonClassName="bg-red-light"
      >
        {t("unbox_your_creativity_section")}
      </UnboxYourCreativitySection>
    </Layout>
  );
}
