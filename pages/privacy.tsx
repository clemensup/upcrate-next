import useTranslation from "next-translate/useTranslation";
import { Layout } from "../components";

export default function Privacy() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <section className="md:p-20 text-purple-dark">
        <h1 className="text-6xl font-display">
          {t("pages.privacy.page_title")}
        </h1>
        <h2 className="text-2xl font-bold mt-10 md:mt-20">
          Ahoy and welcome to our website!
        </h2>
      </section>
    </Layout>
  );
}
