import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ContactForm } from "../components/contact-form";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.contact.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.contact.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.contact.ogDescription")}
        />
      </Head>
      <section className="p-10 md:p-10 relative overflow-hidden">
        <RadialGradient className="bg-purple" />
        <div className="z-10 relative text-purple-dark">
          <h1 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center md:max-w-xl m-auto">
            {t("pages.contact.title")}
          </h1>

          <ContactForm />
        </div>
        <RadialGradient className="bg-orange" variant="bottom-right" />
      </section>
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/contact/image-section.png"
          alt=""
        />
      </div>
    </>
  );
}
