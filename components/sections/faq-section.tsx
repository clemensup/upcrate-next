import React from "react";
import { Accordion } from "../elements/accordion";
import { RadialGradient } from "../elements/radial-gradient";

interface Faq {
  question: string;
  answer: string;
}

export function FaqSection() {
  const faqs: Faq[] = [
    {
      question: "How do I subscribe to Upcrate?",
      answer:
        "Click here to select your plan. It’s easy and you can cancel at any time!",
    },
    {
      question: "Where does Upcrate ship to?",
      answer: "It is simple. We ship worldwide.",
    },
    {
      question: "Do I have to expect a delivery charge?",
      answer:
        "Shipping is always free of charge unless you live in a country where our packages have frequently been lost in the process. In that case, a mandatory tracking charge of EUR 2.50 applies to make sure your crate arrives safely. You can see whether you are affected by this on the checkout page.",
    },
    {
      question: "Which art supplies will be in the crate?",
      answer:
        "That’s a surprise and part of the excitement of Upcrate! You’ll never know what is going to be inside before it arrives, but you can be certain that you’ll discover new, high quality art supplies you might love.",
    },
    {
      question: "How many items will be in each crate?",
      answer:
        "This is a mystery as well. The box is filled depending on the value of the art supplies. You can be sure that the value of the content is worth more than the price you pay for the subscription.",
    },
    {
      question: "Why is there a cut-off date?",
      answer:
        "Each month we have a cut-off date to ensure we can plan for all the boxes to be packed and shipped. All subscribers that start with their Upcrate after this date will be added to the subscriber list for the next month.",
    },
    {
      question: "How long until I get my crate?",
      answer:
        "Your boxes will be shipped around the 15th of the month. Once your crates have been shipped out, we will notify you. It will take about 4-8 days for subscribes in Europe and 10-15 days to reach international subscribers.",
    },
    {
      question:
        "I’d love to gift this box to a relative or friend! Is that possible?",
      answer:
        "Yes! Just click the “gift” option in your cart and fill out your invoice address and the delivery address of the person you want to surprise with Upcrate. Your loved one is going to receive their box with the next batch of boxes we ship out into the world… and they’ll even find a Captain Crate card with their name and yours inside!",
    },
    {
      question:
        "What is the difference between a gift box and a regular subscription?",
      answer:
        "Gift boxes are an one-time order, meaning that there is no subscription to this option that would automatically renew itself.",
    },
    {
      question: "How do I become a featured artist in one of the crates?",
      answer:
        "We welcome talented artists that would like to become part of Upcrate. Send us an email with some photos of your artworks to info@upcrate.art and we will get back to you soon.",
    },
    {
      question:
        "I’d love to see my products and art supplies in one of your future crates? How do I get in touch with you?",
      answer:
        "You are convinced our subscribers should get their hands on your products? Send uns an email at support@upcrate.art with more information about your products and we’ll get back to you.",
    },
    {
      question: "How can I pay to subscribe?",
      answer:
        "You have different options like using Paypal, credit cards. Check out our payment options during the check-out process.",
    },
    {
      question: "Can I pay in US dollars or any other currency?",
      answer:
        "As we are based in Germany all prices on the website are listed in EUR. If you are an international subscriber your payment provider will make the conversion to your local currency automatically.",
    },
    {
      question: "When will I be billed for my subscription?",
      answer:
        "You will be billed once you start your subscription. For all following boxes it depends on your chosen plan. Have a look here.",
    },
    {
      question: "If I cancel my subscription, do I get a refund?",
      answer:
        "Canceling your subscription only stops the subscription and prevents any more payments being processed. You will still be sent the number of boxes that you had previously paid for before cancelling. You may have the chance to get a refund unless the box has been shipped. Please get in touch with us at support@upcrate.art",
    },
    {
      question: "Any other questions?",
      answer:
        "Feel free to contact us anytime at support@upcrate.art! We are looking forward to hearing from you!",
    },
    {
      question: "When can I quit my subscription?",
      answer:
        "You can cancel your subscription at any time. Just login into your account. Click to “My subscription”, there you can find the Action “Unsubscribe”.",
    },
  ];

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 pt-20 -mt-20 md:-mt-10 relative overflow-hidden">
      <RadialGradient className="bg-rose" />
      <div className="z-10 relative">
        <h3 className="font-display text-purple-dark text-center text-2xl md:text-5xl">
          Your questions – Our answers
        </h3>
        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            question={
              <p className="mt-4 text-xl text-purple-dark font-bold text-left pr-1">
                {faq.question}
              </p>
            }
            answer={
              <p className="text-xl text-left max-w-4xl font-light text-purple-dark">
                {faq.answer}
              </p>
            }
          />
        ))}
      </div>
      <RadialGradient className="bg-green" variant="bottom-right" />
    </section>
  );
}
