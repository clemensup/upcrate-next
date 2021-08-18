import Image from "next/image";
import { Button, Layout, SubscribeNowSection } from "../components";
import { Countdown } from "../components/countdown";
import { RadialGradient } from "../components/elements/radial-gradient";
import { FlowingHeads } from "../components/flowing-heads";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { SubscriptionInfoSection } from "../components/sections/subscription-info-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";

export default function Subscriptions() {
  return (
    <Layout>
      <SubscribeNowSection />
      <section className="text-center md:pt-16 md:pb-20 relative overflow-hidden">
        <RadialGradient className="bg-orange" />
        <div className="z-10 relative text-purple-dark">
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl">
            Time to subscribe for <br />
            our next upcrate
          </h3>
          <Countdown />
        </div>
      </section>
      <JoinTheArtCrewSection />
      <FlowingHeads className="bg-green" />
      <UpcrateAsGiftSection />
      <SubscriptionInfoSection />
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/subscriptions/image-section.png"
          alt=""
        />
        <div className="z-10 absolute bottom-20 left-0 right-0 text-center">
          <h3 className="font-display md:text-7xl text-3xl text-white">
            Free shipping worldwide
          </h3>
          <Button
            className="bg-orange text-white md:mt-12"
            href="/subscriptions"
          >
            Subscribe now
          </Button>
        </div>
      </div>
    </Layout>
  );
}
