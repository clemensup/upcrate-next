import useTranslation from "next-translate/useTranslation";
import { Layout } from "../components";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function CancellationPolicy() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <section className="p-10 md:p-20 text-purple-dark pb-20 md:pb-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-display">
            {t("pages.terms_and_condtions.title")}
          </h1>
          {/* // TODO: */}
        </div>
        <RadialGradient className="bg-green" variant="bottom-right" />
      </section>
    </Layout>
  );
}
