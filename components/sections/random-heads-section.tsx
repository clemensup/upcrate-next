import useTranslation from "next-translate/useTranslation";
import React from "react";
import { RadialGradient } from "../elements/radial-gradient";
import { CaptainCrateSvg } from "../elements/svg/cpt-crate-svg";

const colors = ["pink", "red", "purple", "green", "orange"];

export function RandomHeadsSection() {
  const { t } = useTranslation("common");

  const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const randomPosition = () => ({
    top: getRandomInt(0, 100) + "%",
    left: getRandomInt(0, 100) + "%",
  });

  const [heads, setHeads] = React.useState([]);

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setHeads((heads) => [
        ...heads,
        <div key={Math.random()} className="absolute" style={randomPosition()}>
          <CaptainCrateSvg
            className={`text-${colors[getRandomInt(0, colors.length)]}`}
            variant="head-only"
          />
        </div>,
      ]);
      () => clearInterval(interval);
    }, 750);

    return () => clearInterval(interval);
  }, [heads]);

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 pt-20 -mt-20 md:-mt-10 relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark flex flex-col relative ">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center md:max-w-6xl m-auto">
          {t("sections.random_heads.title")}
        </h3>
        <div className="relative flex flex-1 min-h-sectionSmall md:min-h-sectionSmallMd">
          {heads}
        </div>
      </div>
    </section>
  );
}
