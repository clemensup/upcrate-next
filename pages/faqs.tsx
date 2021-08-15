import React from "react";
import { HeroSection, Layout } from "../components";
import { FaqSection } from "../components/sections/faq-section";

export default function Faqs() {
  return (
    <Layout>
      <HeroSection
        className="bg-rose"
        title={"FAQ"}
        image="/faqs/hero-image.png"
        mobileImage="/about-us-hero-xs.png"
      />
      <FaqSection />
    </Layout>
  );
}
