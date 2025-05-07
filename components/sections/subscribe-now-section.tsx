import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Button } from "../elements/button";
import { Parallax } from "../elements/parallax";
import { CaptainCrateSvg } from "../elements/svg";

export function SubscribeNowSection() {
  const { t, lang } = useTranslation("common");

  return (
    <section className="py-16 md:py-28 px-10 bg-subscribe-now text-center bg-cover">
      <h3 className="font-display text-white text-2xl md:text-5xl mb-10">
        {t("sections.subscribe_now.title")}
      </h3>

      <div className="md:flex md:space-x-32 justify-center align-center">
        <div className="bg-purple-dark text-center text-white flex flex-col pt-4 pb-10 rounded">
          <CaptainCrateSvg variant="plus" className="self-center" />
          <Parallax offset={-30}>
            <Image
              src="/subscribe-now/1-month-box.png"
              width="532"
              height="280"
            />
          </Parallax>

          <div className="flex align-center justify-center">
          <svg>
    <defs>
      <style>{"\n      .st0 {\n        fill: #fff;\n      }\n    "}</style>
    </defs>
    <polygon
      className="st0"
      points="61.33 346.81 74.91 394.32 145.68 360.39 164.1 381.71 57.45 493.21 62.3 543.62 226.15 544.59 223.24 500 110.78 496.12 226.15 385.59 154.41 297.37 61.33 346.81"
    />
    <path
      className="st0"
      d="M379.12,404.76l15.51-21.92-2.91-99.55-142.35,9.67-5.99,109.06,17.45,22.83-22.3,28.31,4.2,82.99,151.76,4.2,1.1-118.24-16.48-17.35ZM293.85,328.6l43.58.35v41.1l-44.25,7.32.66-48.77ZM290,497.29l2.83-55.09,49.45-.91,1.94,57.54-54.21-1.53Z"
    />
    <g>
      <polygon
        className="st0"
        points="521.63 408.86 443.1 415.65 432.44 519.39 526.48 522.29 528.42 496.12 460.55 490.3 462.49 439.89 526.48 436.01 521.63 408.86"
      />
      <polygon
        className="st0"
        points="417.69 448.24 415.92 465 504.73 464.71 502.97 444.42 417.69 448.24"
      />
      <polygon
        className="st0"
        points="424.16 471.44 421.51 487.91 504.14 487.91 505.32 469.09 424.16 471.44"
      />
    </g>
  </svg>

          </div>
          <p className="mt-3">
            {t("sections.subscribe_now.subscriptions.0.payment_cycle")}
          </p>
          <Button
            className="bg-orange text-white mb-4 mt-2 md:mt-5"
            href={`https://shop.upcrate.art${
              lang === "en" ? "" : "/de"
            }/product/subscription-1-month/`}
          >
            {t("sections.subscribe_now.subscriptions.0.cta")}
          </Button>
          <p>{t("sections.subscribe_now.subscriptions.0.dollar_estimation")}</p>
        </div>
        </div>


      <div className="py-2 px-4 bg-white inline-block text-purple-dark mt-16 text-xl">
        {t("sections.subscribe_now.cancellation_text")}
      </div>
    </section>
  );
}
