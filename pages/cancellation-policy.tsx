import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { FormattedText } from "../components/elements/formatted-text";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function CancellationPolicy() {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          {t("pages.cancellation_policy.title").replace("<1></1>", "")} |
          upcrate
        </title>
        <meta
          property="og:title"
          content={t("pages.cancellation_policy.title").replace("<1></1>", "")}
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

          <FormattedText transKey="common:pages.cancellation_policy.withdrawal_desc" />

          <h2 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
            {" "}
            {t("pages.cancellation_policy.withdrawal_title")}
          </h2>
          <FormattedText transKey="common:pages.cancellation_policy.withdrawal_text" />

          <h3 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
            {t("pages.cancellation_policy.consequences_title")}
          </h3>

          <div className="mb-20">
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

          {lang === "en" ? (
            <div>
              <h3 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
                Sample revocation form
              </h3>
              <p className="mb-4">
                (If you want to cancel the contract, please fill out this form
                and send it back).
              </p>
              <ul>
                <li className="mb-4">
                  - To: COLORSPAZE LTD Akropoleos 27 5282 Paralimni, Ammochostos CYPRUS email: info@upcrate.art
                </li>
                <li className="mb-4">
                  - I/we (*) hereby cancel the contract concluded by me/us (*)
                  for the purchase of the following goods (*)/provision of the
                  following service (*)
                </li>

                <li className="mb-4">- Ordered on (*)/received on (*) </li>
                <li className="mb-4">- Name of the consumer(s) </li>
                <li className="mb-4">- Address of the consumer(s)</li>
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="text-xl md:text-2xl font-bold mt-10 md:mt-20">
                Muster-Widerrufsformular
              </h3>
              <p className="mb-4">
                (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
                dieses Formular aus und senden Sie es zurück.)
              </p>
              <ul>
                <li className="mb-4">
                  — An COLORSPAZE LTD Akropoleos 27 5282 Paralimni, Ammochostos CYPRUS E-Mail: info@upcrate.art
                </li>
                <li className="mb-4">
                  — Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                  abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/
                  die Erbringung der folgenden Dienstleistung (*)
                </li>
                <li className="mb-4">— Bestellt am (*)/erhalten am (*)</li>
                <li className="mb-4">— Name des/der Verbraucher(s)</li>
                <li className="mb-4">— Anschrift des/der Verbraucher(s)</li>
              </ul>
            </div>
          )}
        </div>
        <RadialGradient className="bg-pink" variant="bottom-right" />
      </section>
    </>
  );
}
