import useTranslation from "next-translate/useTranslation";
import { Layout, HeroSection, UnboxYourCreativitySection } from "../components";

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
      <UnboxYourCreativitySection
        className="bg-rose"
        buttonClassName="bg-red-light"
      >
        {t("unbox_your_creativity_section")}
      </UnboxYourCreativitySection>
    </Layout>
  );
}
