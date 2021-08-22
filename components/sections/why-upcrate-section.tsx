import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Countdown } from "../countdown";
import { RadialGradient } from "../elements/radial-gradient";
import { CaptainCrateSvg } from "../elements/svg";

export function WhyUpcrateSection() {
  const { t } = useTranslation("common");

  return (
    <section className="text-center text-purple-dark bg-white pt-6 pb-6 px-10 md:pt-20 md:pb-24 relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        <h4 className="text-green">{t("sections.why_upcrate.subtitle")}</h4>
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl">
          {t("sections.why_upcrate.title")}
        </h3>

        <div className="md:flex align-center justify-center gap-20 md:text-xl relative z-10 max-w-6xl mx-auto mb-32">
          <div className="mt-10">
            <Image src="/why-upcrate/1.png" width={414} height={331} />
            <p className="max-w-xs m-auto">
              {t("sections.why_upcrate.steps.0.text")}
            </p>
          </div>
          <div className="mt-10">
            <Image src="/why-upcrate/2.png" width={414} height={331} />
            <p className="max-w-xs m-auto">
              {t("sections.why_upcrate.steps.1.text")}
            </p>
          </div>
          <div className="mt-10">
            <Image src="/why-upcrate/3.png" width={388} height={311} />
            <p className="max-w-xs m-auto">
              {t("sections.why_upcrate.steps.2.text")}
            </p>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="z-10 relative text-purple-dark">
            <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20">
              {t("sections.why_upcrate.whats_inside.title")}
            </h3>
            <p>{t("sections.why_upcrate.whats_inside.text")}</p>

            <CaptainCrateSvg variant="head-only" />
            <div className="image-container">
              <Image
                className="image"
                src="/why-upcrate/how-to.png"
                layout="fill"
              />
            </div>
          </div>
          <RadialGradient className="bg-orange -mt-64" variant="center" />
          <RadialGradient className="bg-orange mt-32" variant="center" />
        </div>

        <Countdown />
      </div>
    </section>
  );
}
