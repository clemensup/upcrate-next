import Head from "next/head";
import React from "react";
import { HeroSection, Layout } from "../components";
import { FaqSection } from "../components/sections/faq-section";

export default function Faqs() {
  return (
    <Layout>
      <Head>
        <title>FAQ | upcrate</title>
        <meta property="og:title" content="FAQ" key="title" />
        <meta property="og:image" content="TODO:" />
        <meta property="og:description" content="TODO:" />
      </Head>
      <HeroSection
        className="bg-rose"
        title={"FAQ"}
        image="/faqs/hero-image.png"
        mobileImage="/faqs/faq-hero-xs.png"
      />
      <FaqSection />
    </Layout>
  );
}
