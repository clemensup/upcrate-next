import { Layout, Button } from "../components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation("about");
  const { t: common } = useTranslation("common");

  return (
    <Layout>
      <section className="relative bg-green">
        <h1>{t("page_title")}</h1>
        <Image
          src="/about-us-hero.jpg"
          layout="responsive"
          height={739}
          width={1704}
        />
      </section>
      <h2 className="font-display text-2xl text-purple-dark py-10 sm:text-5xl text-center">
        Upcrate – The Story of Captain Crate and his subscription crate
      </h2>

      <section className="grid md:grid-cols-2">
        <Image
          src="/about-us-1.jpg"
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
            Captain Crate, an internationally acclaimed art-loving sailor , has
            located the most well-known pens and art supplies factories around
            the world. During his years of travel he built up long-term
            relationships with all manufacturers…
          </p>

          <small className="mt-16">
            Artwork by{" "}
            <a
              href="https://instagram.com/karlon.sardin"
              target="_blank"
              rel="noopener noreferrer"
            >
              @karlon.sardin
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
            src="/about-us-2.jpg"
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
            src="/about-us-3.jpg"
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
        <div className="bg-purple-lightest text-center text-purple-dark flex flex-col justify-center content-center p-12 sm:p-24 text-2xl">
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
            src="/about-us-4.jpg"
            alt=""
            layout="responsive"
            width={938}
            height={748}
          />
        </div>
      </section>

      <section>
        <h3>Instagram</h3>
      </section>

      <section className="text-center p-12 sm:p-24 bg-purple background-gradient text-green backdrop-blur">
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
          src="/about-us-5.jpg"
          layout="responsive"
          width={1920}
          height={768}
        />
      </section>

      <section className="text-center p-10 sm:p-40 bg-green">
        <Image src="/unbox-your-creativity.svg" width="280" height="100%" />

        <h3 className="text-3xl text-purple-dark">
          You’re one of the chosen ones who scrolled all the way down. <br />
          Now you can also subscribe:)
        </h3>

        <Button
          text={common("subscribe_now_button_text")}
          colorClass="bg-purple text-white"
          href="/TODO"
        />
      </section>
    </Layout>
  );
}
