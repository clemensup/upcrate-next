import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import {
  HeroSection,
  SubscribeNowSection,
  UnboxYourCreativitySection,
} from "../components";
import { NewsletterSection } from "../components/sections/newsletter-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";

export default function Newsletter() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Newsletter | upcrate</title>
        <meta property="og:title" content="Newsletter | upcrate" key="title" />
        <meta property="og:image" content="TODO:" />
        <meta property="og:description" content="TODO:" />
      </Head>
      <HeroSection
        className="bg-purple"
        title={"Newsletter"}
        image="/newsletter/hero-image.png"
        mobileImage="/newsletter/newsletter-hero-xs.png"
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
      <UnboxYourCreativitySection
        className="bg-purple text-white"
        title={t("pages.home.chosen_one_section.title")}
        buttonColors="bg-rose hover:bg-orange text-white"
      />
    </>
  );
}
