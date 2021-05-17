import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { CaptainCrateSvg } from "./svg/cpt-crate-head";
import { Logo } from "./svg/logo";

export function Header(): JSX.Element {
  const { t } = useTranslation("common");
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  return (
    <header>
      <div className="container mx-auto p-10">
        <nav className="flex justify-between">
          <div>
            <a href="#">
              <Logo />
            </a>
          </div>
          <div>
            <button
              className="md:hidden bg-purple"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              MENU
            </button>
            <ul className="hidden md:flex md:flex-row text-purple-dark text-2xl items-center">
              <li className="pr-5">
                <a href="/todo">{t("navlink_shop")}</a>
              </li>
              <li className="pr-5">
                <a href="/todo">{t("navlink_crates")}</a>
              </li>
              <li className="pr-5">
                <a href="/todo">{t("navlink_artcrew")}</a>
              </li>
              <li className="pr-15">
                <a href="/todo">{t("navlink_about")}</a>
              </li>

              <li className="pr-10 pl-20">
                <a
                  href="https://shop.upcrate.art/account"
                  className="fill-current text-purple-dark"
                >
                  <CaptainCrateSvg />
                </a>
              </li>

              <li>
                <a
                  href="https://shop.upcrate.art/subscribe"
                  className="font-display bg-orange text-white pt-2 pb-3 text-3xl"
                >
                  {t("subscribe_now_button_text")}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <li>
        <div>
          <Link href="/about" locale="en">
            <a>{t("language_switch_en")}</a>
          </Link>
        </div>
        <div>
          <Link href="/about" locale="de">
            <a>{t("language_switch_de")}</a>
          </Link>
        </div>
      </li>
    </header>
  );
}
