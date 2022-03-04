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
        <address className="mt-20 text-xl mb-20 not-italic">
          COLORSPAZE LTD
          <br />
          Makariou 57
          <br />
          Flat/Office 1<br />
          7100 Aradippou, Larnaca
          <br />
          CYPRUS
          <br />
          <br />
          <p className="mb-10">
            {t("pages.imprint.phone_label")}: +49 177 543 39 13
            <br />
            {t("pages.imprint.phone_service_times")}
            <br />
            E-Mail:{" "}
            <a href="mailto:support@upcrate.art" className="hover:underline">
              support@upcrate.art
            </a>
          </p>
          <br />
          <p>{t("pages.imprint.vat_id_label")}: CY10426598I</p>
          <br />
          <p>{t("pages.imprint.registration_court_label")}: Nicosia</p>
          <p>{t("pages.imprint.registration_number_label")}: HE 426598</p>
          <p>{t("pages.imprint.director_label")}: Clemens Roosen</p>
          <br />
          <br />
          {t("pages.imprint.shipped_and_packed_label")}
        </address>

        <RadialGradient className="bg-orange" variant="bottom-right" />
      </section>
    </>
  );
}
