import useTranslation from "next-translate/useTranslation";
import { Layout } from "../components";
import { FormattedText } from "../components/elements/formatted-text";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function CancellationPolicy() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <section className="p-10 md:p-20 text-purple-dark pb-20 md:pb-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-display">
            {t("pages.cancellation_policy.title")}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
            {" "}
            {t("pages.cancellation_policy.withdrawal_title")}
          </h2>
          <FormattedText transKey="common:pages.cancellation_policy.withdrawal_text" />

          <h3 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
            {t("pages.cancellation_policy.consequences_title")}
          </h3>

          <FormattedText transKey="common:pages.cancellation_policy.consequences_text" />
        </div>
        <RadialGradient className="bg-pink" variant="bottom-right" />
      </section>
    </Layout>
  );
}
