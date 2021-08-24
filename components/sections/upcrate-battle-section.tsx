import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { FormattedText } from "../elements/formatted-text";
import { RadialGradient } from "../elements/radial-gradient";
import { BattleBorderSvg } from "../elements/svg/battle-border";
import { BattleSvg } from "../elements/svg/battle-svg";

export function UpcrateBattleSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd text-center p-10 md:p-20 relative overflow-hidden">
      <RadialGradient className="bg-green" />
      <div className="z-10 relative text-purple-dark">
        <div className="md:mt-15 flex flex-col items-center">
          <BattleSvg />
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center">
            {t("sections.upcrate_battle.title")}
          </h3>
          <p className="md:mt-5 text-purple-dark text-xl whitespace-pre-line">
            {t("sections.upcrate_battle.text")}
          </p>
        </div>
        <div className="md:flex align-center justify-center gap-20 md:text-xl text-purple-dark">
          <div className="mt-10">
            <h4 className="text-left mb-3">TOPIC: Colorless beauty</h4>
            <Image
              src="/home/battle/battle-01.png"
              layout="responsive"
              width={330}
              height={330}
            />
            <div className="flex items-end justify-between">
              <div className="text-bold">#upcrate19</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/jj8.kaiser.art/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jj8.kaiser.art
              </a>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-left mb-3">TOPIC: Crystal clear</h4>
            <Image
              src="/home/battle/battle-02.png"
              layout="responsive"
              width={330}
              height={330}
            />
            <div className="flex items-end justify-between">
              <div className="text-bold">#upcrate16</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/@trinkety/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @trinkety
              </a>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-left mb-3">TOPIC: Magical fantasy</h4>
            <Image
              src="/home/battle/battle-03.png"
              layout="responsive"
              width={330}
              height={330}
            />
            <div className="flex items-end justify-between">
              <div className="text-bold">#upcrate11</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/rangie_art/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rangie_art
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-48 text-center flex flex-col items-center justify-center text-purple-dark relative">
          <RadialGradient variant="center" className="bg-pink" />
          <div className="hidden md:flex absolute -top-10 left-0 right-0 justify-center">
            <BattleBorderSvg />
          </div>

          <div className="z-10">
            <div className="md:flex gap-4 justify-between p-10 border-1">
              <img src="/home/battle/win-prizes.png" alt="" />
              <p className="text-xl text-right">
                <FormattedText
                  transKey="common:sections.upcrate_battle.prize_example"
                  delimiter={[<b className="block font-bold" />]}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <h4 className="font-bold text-3xl">
            {t("sections.upcrate_battle.how_to_participate.title")}
          </h4>
          <div className="md:grid grid-cols-3 gap-10 mt-6">
            <div className="mt-10 md:mt-0">
              <Image
                src="/upcrate-battle/how-to-01.png"
                width={389}
                height={311}
              />
              <div className="flex justify-between">
                <span className="font-bold font-display text-5xl">1.</span>
                {t("sections.upcrate_battle.how_to_participate.steps.0.text")}
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <Image
                src="/upcrate-battle/how-to-02.png"
                width={389}
                height={311}
              />
              <div className="flex justify-between text-right">
                <span className="font-bold font-display text-5xl">2.</span>
                {t("sections.upcrate_battle.how_to_participate.steps.1.text")}
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <Image
                src="/upcrate-battle/how-to-03.png"
                width={389}
                height={311}
              />
              <div className="flex justify-between text-right">
                <span className="font-bold font-display text-5xl">3.</span>
                {t("sections.upcrate_battle.how_to_participate.steps.2.text")}
              </div>
            </div>
          </div>
        </div>
        <section className="min-h-sectionSmall md:min-h-sectionSmallMd pt-32 mt-20 pb-20 relative">
          <div className="z-10 relative text-center flex justify-center flex-col items-center gap-10">
            <h4 className="text-3xl sm:text-5xl md:text-7xl text-white font-display text-purple-dark max-w-6xl">
              {t("sections.upcrate_battle.checkout_instagram")}
            </h4>
            <motion.a
              href="https://instagram.com/upcrate/"
              className="hover:underline"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Image src="/instagram.png" width={88} height={88} />
            </motion.a>
          </div>
          <RadialGradient className="bg-green" variant="center" />
        </section>
      </div>
    </section>
  );
}
