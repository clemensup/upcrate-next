import Image from "next/image";
import {
  Caret,
  Layout,
  SubscribeNowSection,
  UnboxYourCreativitySection,
} from "../components";
import { NewsletterSection } from "../components/sections/newsletter-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";

export default function Newsletter() {
  return (
    <Layout>
      TODO: HERO SECTION
      <img src="/newsletter/hero-image.png" />
      <NewsletterSection />
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd mb-2">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/newsletter/image-section.png"
          alt=""
        />
      </div>
      <SubscribeNowSection />
      <UpcrateAsGiftSection />
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd mb-2 mt-2">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/newsletter/image-section02.png"
          alt=""
        />
      </div>
      <UnboxYourCreativitySection className="bg-purple">
        <h3 className="text-white text-4xl mx-auto text-center max-w-4xl font-bold">
          You are one of the chosen ones who scrolled all the way down! Check
          out Captain Crate’s offers here:
        </h3>
        <a
          className="font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 bg-rose hover:bg-green-darker text-white px-10 mx-auto"
          href="/subscriptions"
        >
          Subscribe now &nbsp;
          <Caret />
        </a>
      </UnboxYourCreativitySection>
    </Layout>
  );
}
