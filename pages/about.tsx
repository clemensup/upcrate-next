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
            Captain Crate…
          </h3>
          <p className="mt-8 text-xl">
            has gotten to know a wide variety of art materials and their
            manufacturers on his travels across the seven seas. He is always
            looking for new connections and treasures for you - his art crew.
          </p>

          <small className="mt-16">
            Artwork by{" "}
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
            …delivers monthly…
          </h3>
          <p className="mt-8">
            …every month he sends a great selection of mystery art supplies in a
            crate to all his art-loving crew members around the world. Through
            his contacts and technical know-how as a pen tester he can guarantee
            to deliver the latest and most attractive products every month with
            the best quality and at incredibly low prices…
          </p>

          <small className="mt-16">
            Artwork by{" "}
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
            …for the art crew
          </h3>
          <p className="mt-8">
            Upcrate is the artist treasure crate that not only upgrades your art
            materials every month but also enhances your personal artistic
            abilities. Great – create – crate. In addition to the art materials
            delivered each month, Captain Crate brings his pirates together
            through multiple challenges and collaborations with various artists
            worldwide.
          </p>

          <small className="mt-16">
            Artwork by{" "}
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
            behind the scenes
          </h3>
          <p className="mt-8">
            …Captain Crate was spring to life by Manuel of Hamburg. He is a
            designer by profession and a creative mind by nature. Clemens
            knowing almost every art supplies factory on the planet created
            Upcrate. He takes special care of all operational matters. A
            dedicated team of expressive artists tests all art supplies they
            curate for Upcrate to make sure the best stuff is selected for your
            creative journey.
          </p>

          <small className="mt-16">
            Artwork by{" "}
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

      <section className="text-center p-12 sm:p-24 bg-purple background-gradient text-green backdrop-blur md:my-2">
        <h3 className="xs:text-3xl sm:text-5xl md:text-7xl font-display text-purple-dark">
          Let’s draw as one.
          <br />
          Let’s connect worldwide and live art together
        </h3>
        <div className="mt-10">
          <Image
            src="/captain-crate-sign.svg"
            layout="intrinsic"
            width={180}
            height="auto"
          />
        </div>
      </section>

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
        <h3 className="text-white text-4xl mx-auto text-center max-w-4xl font-bold">
          You are one of the chosen ones who scrolled all the way down! Check
          out Captain Crate’s offers here:
        </h3>
        <a
          className="font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 bg-purple hover:bg-purple-dark text-white px-10 mx-auto"
          href="/subscriptions"
        >
          Subscribe now &nbsp;
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
