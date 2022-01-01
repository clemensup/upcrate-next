import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function Imprint() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.imprint.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.imprint.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.imprint.og_description")}
        />
      </Head>
      <section className="text-center md:p-20 text-purple-dark relative overflow-hidden">
        <h1 className="text-3xl md:text-6xl font-display">
          <Trans
            i18nKey="common:pages.imprint.title"
            components={{
              1: <br className="block md:hidden" />,
            }}
          />
        </h1>
        <address className="mt-20 text-xl pb-20 not-italic">
          {t("pages.imprint.owner")}
          <br />
          <br />
          COLORSPAZE LTD
          <br />
          Makariou 57<br />Flat/Office 1<br />7100 Aradippou, Larnaca<br />
          <br />
          CYPRUS
          <br />
          <br />
          <p>{t("pages.imprint.phone_label")}: +49 177 543 39 13</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:support@upcrate.art" className="hover:underline">
              support@upcrate.art
            </a>
          </p>
          <br />
          <br />
          VAT ID No.: CY10426598I
          <br />
          <br />
          packaged and shipped/gepackt und verschickt in Hamburg, Germany
        </address>

        <RadialGradient className="bg-orange" variant="bottom-right" />
      </section>
    </>
  );
}
