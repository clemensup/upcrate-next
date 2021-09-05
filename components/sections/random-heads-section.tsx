import useTranslation from "next-translate/useTranslation";
import { useRandomHeads } from "../../hooks/use-random-heads";
import { RadialGradient } from "../elements/radial-gradient";

export function RandomHeadsSection() {
  const { t } = useTranslation("common");
  const heads = useRandomHeads();

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 pt-20 -mt-20 md:-mt-10 relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark flex flex-col relative ">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center md:max-w-6xl m-auto">
          {t("sections.random_heads.title")}
        </h3>
        <div className="relative flex flex-1 min-h-sectionSmall md:min-h-sectionSmallMd">
          {heads}
        </div>
      </div>
    </section>
  );
}
