import useTranslation from "next-translate/useTranslation";
import { Layout } from "../components";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function Imprint() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <section className="text-center md:p-20 text-purple-dark relative overflow-hidden">
        <h1 className="text-6xl font-display">{t("pages.imprint.title")}</h1>
        <address className="mt-20 text-xl pb-20 not-italic">
          Owner
          <br />
          <br />
          Clemens Roosen
          <br />
          Suhrsweg 3<br />
          22305 Hamburg
          <br />
          Germany
          <br />
          <br />
          E-Mail: <a href="mailto:support@upcrate.art">support@upcrate.art</a>
          <br />
          <br />
          VAT Id. No.: DE257896061
        </address>

        <RadialGradient className="bg-orange" variant="bottom-right" />
      </section>
    </Layout>
  );
}
