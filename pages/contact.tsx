import React from "react";
import { Layout } from "../components";
import { ContactForm } from "../components/contact-form";

export default function Contact() {
  return (
    <Layout>
      <section className="p-10 md:p-20">
        <h1 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center md:max-w-xl m-auto">
          Contact
        </h1>

        <ContactForm />
      </section>
      <section className="min-h-sectionSmall md:min-h-sectionSmallMd bg-contact-image-section bg-center bg-cover bg-no-repeat"></section>
    </Layout>
  );
}
