import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { CaptainCrateSvg } from "./elements/svg/cpt-crate-svg";
import { FooterNewsletterForm } from "./footer-newsletter-form";

export function Footer(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-purple-dark text-white pt-20">
      <div className="container mx-auto p-5 md:p-0 w-full grid mb-4 md:grid-cols-6">
        <CaptainCrateSvg variant="head-only" className="text-white mb-5" />
        <div>
          <h4 className="mb-4 text-xl uppercase">Legal</h4>
          <ul className="list-reset leading-normal text-red text-xl">
            <li>
              <a href="/imprint">imprint</a>
            </li>
            <li>
              <a href="/privacy">privacy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">general terms and conditions</a>
            </li>
            <li>
              <a href="/cancellation-policy">cancellation policy</a>
            </li>
          </ul>

          <Image src="/tube.svg" width="100%" height="auto" />
        </div>
        <div className="md:col-span-2">
          <h4 className="mb-4 text-xl uppercase">Info</h4>
          <ul className="text-blue text-xl">
            <li>
              <a href="/refer-a-friend">refer a friend</a>
            </li>
            <li>
              <a href="/contact">help / contact</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="https://shop.upcrate.art/account/">sign up / login </a>
            </li>
          </ul>
          <Image src="/pen.svg" width="100%" height="auto" />
        </div>
        <div className="md:col-span-2 flex flex-col justify-between">
          <FooterNewsletterForm />

          <p className="text-white text-2xl">
            {t("footer.get_support")}
            <br />
            <a
              className="underline hover:text-pink"
              href="mailto:support@upcrate.art"
            >
              support@upcrate.art
            </a>
          </p>
        </div>
      </div>

      <div className="p-5 md:p-0 container mx-auto sm:flex mb-4">
        <ul className="flex flex-wrap gap-8">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Pinterest</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
        </ul>
      </div>

      <div className="text-center bg-purple-light text-white p-4">
        © Copyright 2019 - 2021 – Upcrate Art Pirates
      </div>
    </footer>
  );
}
