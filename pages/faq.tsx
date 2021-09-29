import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { HeroSection } from "../components";
import { FaqSection } from "../components/sections/faq-section";

export default function Faqs() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>FAQ | upcrate</title>
        <meta property="og:title" content="FAQ" key="title" />

        <meta
          property="og:description"
          content={t("pages.faqs.og_description")}
        />
      </Head>
      <HeroSection
        className="bg-rose"
        title={"FAQ"}
        image="/faqs/hero-image.png"
        mobileImage="/faqs/faq-hero-xs.png"
      />
      <FaqSection />
    </>
  );
}
