import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { RadialGradient } from "../elements/radial-gradient";

export function AsFeaturedInSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd py-10 relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center">
          {t("sections.as_featured_in.title")}
        </h3>
        <div className="flex gap-20 justify-center mt-10 md:mt-32">
          <a href="https://www.palette-magazin.de" target="_blank">
            <Image src="/palette.png" width={222} height={103} />
          </a>

          <a
            href="https://www.palette-magazin.de"
            target="_blank"
            className="hidden md:block"
          >
            <Image src="/palette.png" width={222} height={103} />
          </a>
          <a
            href="https://www.palette-magazin.de"
            target="_blank"
            className="hidden md:block"
          >
            <Image src="/palette.png" width={222} height={103} />
          </a>
          <a
            href="https://www.palette-magazin.de"
            target="_blank"
            className="hidden md:block"
          >
            <Image src="/palette.png" width={222} height={103} />
          </a>
        </div>
      </div>
    </section>
  );
}
