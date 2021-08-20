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
import useTranslation from "next-translate/useTranslation";
import { FormattedText } from "../components/elements/formatted-text";

export default function HowItWorks() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HeroSliderSection />
      <JoinTheArtCrewSection />
      <ImageSection
        bg="how-it-works/image-section01"
        variant="xs"
        className="my-2"
      />
      <HowItWorksSection />
      <FlowingHeads className="bg-green-dark" />
      <WhyUpcrateSection />
      <UpcrateAsGiftSection />
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white max-w-7xl mx-auto">
          <FormattedText
            transKey="common:pages.how_it_works.draw_as_one_section"
            delimiter={[<br />, <span className="font-display" />]}
          />
        </h4>
      </ConnectSloganSection>
      <ImageSection bg="how-it-works/image-section" />
      <FollowUsOnInstagramSection />
      <UnboxYourCreativitySection className="bg-purple">
        <h3 className="text-white text-4xl mx-auto text-center max-w-5xl font-bold  whitespace-pre-line">
          {t("pages.how_it_works.chosen_one_section.title")}
        </h3>
        <a
          className="bg-rose font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 text-white px-10 mx-auto gap-4"
          href="/subscriptions"
        >
          {t("subscribe_now_button_text")}
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
