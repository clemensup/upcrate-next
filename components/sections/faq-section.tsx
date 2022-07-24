import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Accordion } from "../elements/accordion";
import { FormattedText } from "../elements/formatted-text";
import { RadialGradient } from "../elements/radial-gradient";

interface Faq {
  question: string;
  answer: string;
}

export function FaqSection() {
  const { t } = useTranslation("common");

  const faqs: Faq[] = [
    {
      question: t("faqs.0.question"),
      answer: t("faqs.0.answer"),
    },
    {
      question: t("faqs.1.question"),
      answer: t("faqs.1.answer"),
    },
    {
      question: t("faqs.2.question"),
      answer: t("faqs.2.answer"),
    },
    {
      question: t("faqs.3.question"),
      answer: t("faqs.3.answer"),
    },
    {
      question: t("faqs.4.question"),
      answer: t("faqs.4.answer"),
    },
    {
      question: t("faqs.5.question"),
      answer: t("faqs.5.answer"),
    },
    {
      question: t("faqs.6.question"),
      answer: t("faqs.6.answer"),
    },
    {
      question: t("faqs.7.question"),
      answer: t("faqs.7.answer"),
    },
    {
      question: t("faqs.8.question"),
      answer: t("faqs.8.answer"),
    },
    {
      question: t("faqs.9.question"),
      answer: t("faqs.9.answer"),
    },
    {
      question: t("faqs.10.question"),
      answer: t("faqs.10.answer"),
    },
    {
      question: t("faqs.11.question"),
      answer: t("faqs.11.answer"),
    },
    {
      question: t("faqs.12.question"),
      answer: t("faqs.12.answer"),
    },
    {
      question: t("faqs.13.question"),
      answer: t("faqs.13.answer"),
    },
    {
      question: t("faqs.14.question"),
      answer: t("faqs.14.answer"),
    },
    {
      question: t("faqs.15.question"),
      answer: t("faqs.15.answer"),
    },
    {
      question: t("faqs.16.question"),
      answer: t("faqs.16.answer"),
    },
  ];

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd px-10 md:p-20 pt-20 -mt-20 md:-mt-10 relative overflow-hidden max-w-7xl mx-auto">
      <RadialGradient className="bg-rose" />
      <div className="z-10 relative pt-10 md:pt-20">
        <h3 className="font-display text-purple-dark text-center text-2xl md:text-5xl">
          {t("pages.faqs.title")}
        </h3>
        {faqs.map((faq, key) => (
          <Accordion
            key={faq.question}
            question={
              <p className="mt-4 text-xl text-purple-dark font-bold text-left pr-1">
                {faq.question}
              </p>
            }
            answer={
              <>
                <p className="text-xl text-left max-w-4xl font-light text-purple-dark">
                  {key === 0 ? (
                    <FormattedText
                      transKey={faq.answer}
                      delimiter={[
                        <a className="underline" href="/subscriptions" />,
                      ]}
                    />
                  ) : (
                    <>{faq.answer}</>
                  )}
                </p>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
}
