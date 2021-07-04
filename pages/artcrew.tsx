import useTranslation from "next-translate/useTranslation";
import { Layout, HeroSection, SubscribeNowSection } from "../components";

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
      <SubscribeNowSection
        className="bg-rose"
        description={t("pages.artcrew.subscribe_now_section_description")}
        buttonClassName="bg-red-light"
      />
    </Layout>
  );
}
