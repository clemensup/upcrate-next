import useTranslation from "next-translate/useTranslation";
import {
  Layout,
  HeroSection,
  UnboxYourCreativitySection,
  Caret,
  Button,
} from "../components";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FeaturedArtistsWeWorkedWithSection } from "../components/sections/featured-artists-section";
import { TheBottlePostSection } from "../components/sections/the-bottle-post-section";
import { TheGoldenCrateSection } from "../components/sections/the-golden-crate-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { UpcrateBattleSection } from "../components/sections/upcrate-battle-section";
import { ProfessionalHowToVideosSection } from "../components/sections/professional-howto-videos-section";
import { NewsletterSection } from "../components/sections/newsletter-section";
import { InviteFriendsSection } from "../components/sections/invite-friends-section";
import { FormattedText } from "../components/elements/formatted-text";
import { TimeForArtSection } from "../components/sections/time-for-art-section";
import Head from "next/head";

export default function ArtCrew() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>{t("pages.artcrew.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.artcrew.title")}
          key="title"
        />
        <meta property="og:image" content="TODO:" />
        <meta property="og:description" content="TODO:" />
      </Head>
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
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white whitespace-pre-line">
          <FormattedText
            transKey="common:pages.artcrew.draw_as_one_section.title"
            delimiter={[<br />, <span className="font-display" />]}
          />
        </h4>
      </ConnectSloganSection>
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-artcrew-image-section05 bg-center bg-contain bg-no-repeat"></div>
      <FollowUsOnInstagramSection />

      <UnboxYourCreativitySection
        className="bg-rose text-purple-dark"
        title={t("pages.artcrew.chosen_one_section.title")}
        buttonColors="bg-purple hover:bg-purple-dark text-white"
      />
    </Layout>
  );
}
