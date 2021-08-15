import Image from "next/image";
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
      <div className="relative min-h-sectionBig md:min-h-sectionBigMd">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src="/contact/image-section.png"
          alt=""
        />
      </div>
    </Layout>
  );
}
