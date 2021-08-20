import {
  Layout,
  HeroSection,
  UnboxYourCreativitySection,
  Caret,
} from "../components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FlowingHeads } from "../components/flowing-heads";
import { RandomHeadsSection } from "../components/sections/random-heads-section";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FormattedText } from "../components/elements/formatted-text";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HeroSection
        className="bg-green"
        title={t("pages.about.title")}
        image="/about/about-us-hero.png"
        mobileImage="/about/about-us-hero-xs.png"
      />

      <RandomHeadsSection />

      <section className="grid md:grid-cols-2">
        <Image
          src="/about/about-us-1.png"
          alt=""
          layout="responsive"
          width={938}
          height={748}
        />
        <div className="bg-purple-light text-center text-white flex flex-col justify-center content-center p-12 sm:p-24 text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.0.title")}
          </h3>
          <p className="mt-8 text-xl">{t("pages.about.sections.0.text")}</p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/thingby_diana"
              target="_blank"
              rel="noopener noreferrer"
            >
              @thingby_diana
            </a>
          </small>
        </div>
      </section>
      <section className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="bg-purple-lightest text-center text-purple-dark flex flex-col justify-center content-center p-12 sm:p-24 text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.1.title")}
          </h3>
          <p className="mt-8">{t("pages.about.sections.1.text")}</p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/snowsart"
              target="_blank"
              rel="noopener noreferrer"
            >
              @snowsart
            </a>
          </small>
        </div>
        <div>
          <Image
            src="/about/about-us-2.jpg"
            alt=""
            layout="responsive"
            width={938}
            height={748}
          />
        </div>
      </section>
      <section className="grid md:grid-cols-2">
        <div>
          <Image
            src="/about/about-us-3.jpg"
            alt=""
            layout="responsive"
            width={938}
            height={748}
          />
        </div>
        <div className="bg-purple-light text-center text-white flex flex-col justify-center content-center p-12 sm:p-24 text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.2.title")}
          </h3>
          <p className="mt-8">{t("pages.about.sections.2.text")}</p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/sabien-art"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sabien-art
            </a>
          </small>
        </div>
      </section>
      <section className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="bg-purple-lightest text-center text-purple-dark flex flex-col justify-center content-center p-12 sm:p-16 text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.3.title")}
          </h3>
          <p className="mt-8">{t("pages.about.sections.3.text")}</p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/sarkasik"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sarkasik
            </a>
          </small>
        </div>
        <div>
          <Image
            src="/about/about-us-4.png"
            alt=""
            layout="responsive"
            width={938}
            height={748}
          />
        </div>
      </section>

      <FollowUsOnInstagramSection />

      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white whitespace-pre-line">
          <FormattedText
            transKey="common:pages.home.draw_as_one_section"
            delimiter={[<span className="font-display" />, <br />]}
          />
        </h4>
      </ConnectSloganSection>

      <section>
        <Image
          src="/about/about-us-5.jpg"
          layout="responsive"
          width={1920}
          height={768}
        />
      </section>

      <FlowingHeads className="bg-green" />

      <UnboxYourCreativitySection className="bg-green">
        <h3 className="text-purple-dark text-4xl mx-auto text-center max-w-5xl font-bold whitespace-pre-line">
          {t("pages.about.chosen_one_section.title")}
        </h3>
        <a
          className="bg-purple hover:bg-purple-dark font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 text-white px-10 mx-auto gap-4"
          href="/subscriptions"
        >
          {t("subscribe_now_button_text")}
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
