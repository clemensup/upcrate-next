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
import { FeaturedArtistsWeWorkedWithSection } from "../components/sections/former-artists-section";
import { TheBottlePostSection } from "../components/sections/the-bottle-post-section";
import { TheGoldenCrateSection } from "../components/sections/the-golden-crate-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { UpcrateBattleSection } from "../components/sections/upcrate-battle-section";
import { ProfessionalHowToVideosSection } from "../components/sections/professional-howto-videos-section";
import { NewsletterSection } from "../components/sections/newsletter-section";
import { InviteFriendsSection } from "../components/sections/invite-friends-section";
import { FormattedText } from "../components/elements/formatted-text";
import { TimeForArtSection } from "../components/sections/time-for-art-section";

export default function ArtCrew() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HeroSection
        className="bg-rose"
        title={t("pages.artcrew.title")}
        image="/artcrew-hero.png"
        mobileImage="/artcrew-hero-xs.png"
      />
      <NewsletterSection>
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center m-auto">
          {t("pages.artcrew.newsletter_section.title")}
        </h3>
        <p className="text-2xl text-purple-dark md:mt-10 md:mb-20 md:max-w-6xl md:mx-auto">
          {t("pages.artcrew.newsletter_section.text")}
        </p>
      </NewsletterSection>
      <FlowingHeads className="bg-purple" />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section01 bg-center bg-cover bg-no-repeat"></div>
      <TimeForArtSection />
      <InviteFriendsSection />
      <UpcrateAsGiftSection />
      <UpcrateBattleSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section02 bg-center bg-cover bg-no-repeat"></div>
      <TheGoldenCrateSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section03 bg-center bg-cover bg-no-repeat"></div>
      <TheBottlePostSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section04 bg-center bg-cover bg-no-repeat"></div>
      <FeaturedArtistsWeWorkedWithSection />
      <ProfessionalHowToVideosSection />
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white">
          <FormattedText
            transKey="common:pages.artcrew.draw_as_one_section.title"
            delimiter={[<br />, <span className="font-display" />]}
          />
        </h4>
      </ConnectSloganSection>
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section05 bg-center bg-contain bg-no-repeat"></div>
      <FollowUsOnInstagramSection />
      <UnboxYourCreativitySection className="bg-rose">
        <h3 className="text-purple-dark text-4xl mx-auto text-center max-w-5xl font-bold  whitespace-pre-line">
          {t("pages.artcrew.chosen_one_section.title")}
        </h3>
        <a
          className="bg-purple hover:bg-purple-dark font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 text-white px-10 mx-auto"
          href="/subscriptions"
        >
          {t("subscribe_now_button_text")}
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
