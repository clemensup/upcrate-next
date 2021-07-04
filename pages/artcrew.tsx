import { Layout } from "../components";
import useTranslation from "next-translate/useTranslation";
import { HeroSection } from "../components/hero-section";

export default function ArtCrew() {
  const { t } = useTranslation("artcrew");

  return (
    <Layout>
      <HeroSection
        className="bg-rose"
        title={t("page_title")}
        image="/artcrew-hero.png"
        mobileImage="/artcrew-hero-xs.png"
      />
    </Layout>
  );
}
