import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { FormattedText } from "../components/elements/formatted-text";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function CancellationPolicy() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.cancellation_policy.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.cancellation_policy.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.cancellation_policy.og_description")}
        />
      </Head>
      <section className="p-10 md:p-20 text-purple-dark pb-20 md:pb-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-display">
            <Trans
              i18nKey="common:pages.cancellation_policy.title"
              components={{
                1: <br className="block md:hidden" />,
              }}
            />
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
            {" "}
            {t("pages.cancellation_policy.withdrawal_title")}
          </h2>
          <FormattedText transKey="common:pages.cancellation_policy.withdrawal_text" />

          <h3 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
            {t("pages.cancellation_policy.consequences_title")}
          </h3>

          <FormattedText
            transKey="common:pages.cancellation_policy.consequences_text"
            delimiter={[
              <p>
                <br />
              </p>,
              <p className="my-5">
                <br />
                <br />
              </p>,
            ]}
          />
        </div>
        <RadialGradient className="bg-pink" variant="bottom-right" />
      </section>
    </>
  );
}
