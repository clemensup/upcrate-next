import React from "react";
import { HeroSection, Layout } from "../components";
import { FaqSection } from "../components/sections/faq-section";

export default function Faqs() {
  return (
    <Layout>
      {/* TODO: use image from design */}
      <HeroSection
        className="bg-rose"
        title={"FAQ"}
        image="/crates/hero-image.png"
        mobileImage="/about-us-hero-xs.png"
      />
      <FaqSection/>      
    </Layout>
  );
}
