import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import {
  Button,
  Caret,
  HeroSection,
  Layout,
  SubscribeNowSection,
  UnboxYourCreativitySection,
} from "../components";
import { NewsletterSection } from "../components/sections/newsletter-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";

export default function Newsletter() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HeroSection
        className="bg-purple"
        title={"Newsletter"}
        image="/newsletter/hero-image.png"
      />
      <NewsletterSection />
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd mb-2">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/newsletter/image-section.png"
          alt=""
        />
      </div>
      <SubscribeNowSection />
      <UpcrateAsGiftSection />
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd mb-2 mt-2">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/newsletter/image-section02.png"
          alt=""
        />
      </div>
      <UnboxYourCreativitySection className="bg-purple">
        <h3 className="text-white text-4xl mx-auto text-center max-w-5xl font-bold whitespace-pre-line">
          {t("pages.home.chosen_one_section.title")}
        </h3>
        <Button
          className="bg-rose hover:bg-orange font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 text-white px-10 mx-auto gap-4"
          href="/subscriptions"
        >
          {t("subscribe_now_button_text")}
          <Caret />
        </Button>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
