import Image from "next/image";
import { BattleSvg } from "./elements/svg/battle-svg";

export function UpcrateBattleSection() {
  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd text-center p-10 md:p-20">
      <div className="md:mt-15 flex flex-col items-center">
        <BattleSvg />
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center">
          #upcratebattle
        </h3>
        <p className="md:mt-5 text-purple-dark text-3xl">
          Take part in our online challenges and get a chance to win great
          prizes!
          <br />
          Every month a new topic awaits to inspire you!
        </p>
      </div>
      <div className="md:flex align-center justify-center gap-20 md:text-xl text-purple-dark">
        <div className="mt-10">
          <h4 className="text-left mb-3">TOPIC: Colorless beauty</h4>
          <Image
            src="/battle-01.png"
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
            src="/battle-02.png"
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
            src="/battle-03.png"
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
      <div className="p-48">TODO: Win great prizes every month</div>
    </section>
  );
}
