import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { CaptainCrateSvg } from "./svg/cpt-crate-svg";
import { Logo } from "./svg/logo";
import { Modal, Checkbox, Button } from ".";
import { Dialog } from "@headlessui/react";

export function Header(): JSX.Element {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [languageSelectModalOpen, setLanguageSelectModalOpen] =
    React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(lang);

  const saveSelectedLanguage = () => {
    setLanguageSelectModalOpen(false);
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

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
                <a href="https://shop.upcrate.art">{t("navlink_shop")}</a>
              </li>
              <li className="pr-5">
                <a href="/crates">{t("navlink_crates")}</a>
              </li>
              <li className="pr-5">
                <a href="/artcrew">{t("navlink_artcrew")}</a>
              </li>
              <li className="pr-15">
                <a href="/about">{t("navlink_about")}</a>
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

              <li
                className="flex gap-3 ml-7"
                onClick={() => setLanguageSelectModalOpen(true)}
              >
                {lang === "en" && (
                  <Link href="/about" locale="en">
                    <a>{t("language_switch_en")}</a>
                  </Link>
                )}
                {lang === "de" && (
                  <Link href="/about" locale="de">
                    <a>{t("language_switch_de")}</a>
                  </Link>
                )}
                <img src="/globe.png" alt="" />
                <Modal
                  open={languageSelectModalOpen}
                  onClose={() => setLanguageSelectModalOpen(false)}
                  className="bg-orange"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-4xl sm:text-5xl text-purple-dark font-medium text-center font-display"
                  >
                    {t("language_switch_dialog_title")}
                  </Dialog.Title>
                  <div className="my-10 grid gap-4 sm:gap-8 sm:pl-20">
                    <Checkbox
                      name="checked-de"
                      value="de"
                      checked={selectedLanguage === "de"}
                      label={t("language_switch_de_long")}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                    />
                    <Checkbox
                      name="checked-en"
                      value="en"
                      checked={selectedLanguage === "en"}
                      label={t("language_switch_en_long")}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 sm:gap-10 text-center justify-center">
                    <Button
                      onClick={() => setLanguageSelectModalOpen(false)}
                      className="border-purple border-2 text-purple"
                    >
                      {t("cancel")}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={saveSelectedLanguage}
                      className="bg-purple text-white border-2 border-purple"
                    >
                      {t("save")}
                    </Button>
                  </div>
                </Modal>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
