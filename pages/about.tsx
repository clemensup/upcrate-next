import { Layout } from "../components/layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <section>
        <h1>ABOUT US</h1>
        <Image
          src="/about-us-hero.jpg"
          width="100%"
          height="auto"
          layout="responsive"
        />
      </section>
      <h2 className="font-display text-5xl text-center">
        Upcrate – The Story of Captain Crate and his subscription crate
      </h2>

      <section className="grid grid-cols-2">
        <div>
          <Image src="/about-us-1.jpg" alt="" width={938} height={748} />
        </div>
        <div className="bg-purple-light text-center text-white flex flex-col justify-center content-center p-24 text-2xl">
          <h3 className="text-5xl text-purple-dark font-display">
            Captain Crate…
          </h3>
          <p className="mt-8">
            Captain Crate, an internationally acclaimed art-loving sailor , has
            located the most well-known pens and art supplies factories around
            the world. During his years of travel he built up long-term
            relationships with all manufacturers…
          </p>

          <small className="mt-16">Artwork by @karlon.sardin</small>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="bg-purple-light text-center text-white">
          <h3>…delivers monthly…</h3>
          <p>
            …every month he sends a great selection of mystery art supplies in a
            crate to all his art-loving crew members around the world. Through
            his contacts and technical know-how as a pen tester he can guarantee
            to deliver the latest and most attractive products every month with
            the best quality and at incredibly low prices…
          </p>

          <small>Artwork by @snowsart</small>
        </div>
        <div>
          <Image src="/about-us-2.jpg" alt="" width={938} height={748} />
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div>
          <Image src="/about-us-3.jpg" alt="" width={938} height={748} />
        </div>
        <div className="bg-purple-light text-center text-white">
          <h3>…for the art crew</h3>
          <p>
            Upcrate is the artist treasure crate that not only upgrades your art
            materials every month but also enhances your personal artistic
            abilities. Great – create – crate. In addition to the art materials
            delivered each month, Captain Crate brings his pirates together
            through multiple challenges and collaborations with various artists
            worldwide.
          </p>

          <small>Artwork by @sabien-art</small>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="bg-purple-light text-center text-white">
          <h3>behind the scenes</h3>
          <p>
            …Captain Crate was spring to life by Manuel of Hamburg. He is a
            designer by profession and a creative mind by nature. Clemens
            knowing almost every art supplies factory on the planet created
            Upcrate. He takes special care of all operational matters. A
            dedicated team of expressive artists tests all art supplies they
            curate for Upcrate to make sure the best stuff is selected for your
            creative journey.
          </p>

          <small>Artwork by @sarkasik</small>
        </div>
        <div>
          <Image src="/about-us-4.jpg" alt="" width={938} height={748} />
        </div>
      </section>

      <section>
        <h3>Instagram</h3>
      </section>

      <section className="text-center p-24">
        <h3 className="text-7xl font-display">
          Let’s draw as one.
          <br />
          Let’s connect worldwide and live art together
        </h3>
      </section>

      <section>
        <Image
          src="/about-us-5.jpg"
          layout="responsive"
          width="auto"
          height="100%"
        />
      </section>

      <section className="text-center p-40">
        <Image src="/unbox-your-creativity.svg" width="280" height="100%" />

        <h3>
          You’re one of the chosen ones who scrolled all the way down. Now you
          can also subscribe:)
        </h3>

        <a href="">Subscribe Now</a>
      </section>
    </Layout>
  );
}
