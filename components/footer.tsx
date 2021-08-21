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
          <h4 className="mb-4 text-xl uppercase">
            {t("navigation.legal_headline")}
          </h4>
          <ul className="list-reset leading-normal text-red text-xl">
            <li>
              <a href="/imprint">{t("navigation.imprint")}</a>
            </li>
            <li>
              <a href="/privacy">{t("navigation.privacy")}</a>
            </li>
            <li>
              <a href="/terms-and-conditions">
                {t("navigation.terms_and_conditions")}
              </a>
            </li>
            <li>
              <a href="/cancellation-policy">
                {t("navigation.cancellation_policy")}
              </a>
            </li>
          </ul>

          <Image src="/tube.svg" width="100%" height="auto" />
        </div>
        <div className="md:col-span-2">
          <h4 className="mb-4 text-xl uppercase">
            {t("navigation.info_headline")}
          </h4>
          <ul className="text-blue text-xl">
            <li>
              <a href="/refer-a-friend">{t("navigation.refer_a_friend")}</a>
            </li>
            <li>
              <a href="/contact">{t("navigation.help_contact")}</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="https://shop.upcrate.art/account/">
                {t("navigation.signup_login")}
              </a>
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
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Upcrate/"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/upcrate/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pinterest.de/Upcrate_Art/"
            >
              Pinterest
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/upcrateart"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCuBKFplxdLGbCKJaiKnHgcg"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center bg-purple-light text-white p-4">
        © Copyright 2019 - 2021 – Upcrate Art Pirates
      </div>
    </footer>
  );
}
