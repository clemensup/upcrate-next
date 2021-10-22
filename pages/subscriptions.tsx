import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import { Button, SubscribeNowSection } from "../components";
import { Countdown } from "../components/countdown";
import { RadialGradient } from "../components/elements/radial-gradient";
import { FlowingHeads } from "../components/flowing-heads";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { SubscriptionInfoSection } from "../components/sections/subscription-info-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";

export default function Subscriptions() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.subscriptions.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.subscriptions.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.subscriptions.og_description")}
        />
      </Head>
      <SubscribeNowSection />
      <section className="text-center md:pt-16 md:pb-20 relative overflow-hidden">
        <RadialGradient className="bg-orange" />
        <div className="z-10 relative text-purple-dark pt-6 pb-6 px-10 md:pb-24">
          <Countdown />
        </div>
      </section>
      <JoinTheArtCrewSection />
      <FlowingHeads className="bg-green" />
      <UpcrateAsGiftSection />
      <SubscriptionInfoSection />
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd my-1">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/subscriptions/image-section.png"
          alt=""
        />
        <div className="z-10 absolute bottom-20 left-0 right-0 text-center">
          <h3 className="font-display md:text-7xl text-3xl text-white">
            {t("pages.subscriptions.free_shipping_worldwide")}
          </h3>
          <Button
            className="bg-orange hover:bg-pink text-white md:mt-12"
            href="/subscriptions"
          >
            {t("subscribe_now_button_text")}
          </Button>
        </div>
      </div>
    </>
  );
}
