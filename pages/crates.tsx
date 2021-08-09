import Image from "next/image";
import {
  CaptainCrateSvg,
  HeroSection,
  Layout,
  UnboxYourCreativitySection,
} from "../components";
import { JoinTheArtCrewSection } from "../components/join-the-art-crew-section";

export default function Crates() {
  return (
    <Layout>
      <HeroSection
        className="bg-orange"
        title={"Crates"}
        image="/crates/hero-image.png"
        mobileImage="/about-us-hero-xs.png"
      />

      <h3 className="my-20">TODO: Our previous crates</h3>

      <JoinTheArtCrewSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-crates-image-section bg-center bg-cover bg-no-repeat relative flex justify-center items-end p-12">
        <h3 className="text-6xl text-white text-center max-w-xl">
          We found some Art
          <br />
          supplies for you{" "}
        </h3>
      </div>
      <UnboxYourCreativitySection
        className="bg-orange"
        buttonClassName="bg-purple"
      >
        You’re one of the chosen ones who scrolled all the way down.
        <br />
        Now you can also subscribe:)
      </UnboxYourCreativitySection>
    </Layout>
  );
}
