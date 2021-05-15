import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

export function Header(): JSX.Element {
  const { t } = useTranslation("common");
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  return (
    <header>
      <div className="container mx-auto p-5">
        <nav className="flex justify-between">
          <div>
            <a href="#">
              <Image src="/logo.svg" width="100%" height={74} />
            </a>

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
          </div>
          <div>
            <button
              className="md:hidden bg-purple"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              MENU
            </button>
            <ul className="hidden md:flex md:flex-row">
              <li className="pr-5">
                <a>{t("navlink_shop")}</a>
              </li>
              <li className="pr-5">
                <a>{t("navlink_crates")}</a>
              </li>
              <li className="pr-5">
                <a>{t("navlink_artcrew")}</a>
              </li>
              <li>
                <a>{t("navlink_about")}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
