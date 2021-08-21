import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { CaptainCrateSvg } from "./elements/svg/cpt-crate-svg";
import { Logo } from "./elements/svg/logo";
import { Modal, Checkbox, Button } from ".";
import { Dialog } from "@headlessui/react";
import { BurgerSvg } from "./elements/svg";
import { usePersistLocaleCookie } from "../hooks/use-persistent-locale";

export function Header(): JSX.Element {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [languageSelectModalOpen, setLanguageSelectModalOpen] =
    React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(lang);

  usePersistLocaleCookie();

  const saveSelectedLanguage = () => {
    setLanguageSelectModalOpen(false);
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

  return (
    <header>
      <div className="mx-auto p-2 lg:p-4 lg:p-10 relative">
        <nav className="flex justify-between items-center">
          <a href="/" className="inline-block">
            <span className="inline-block lg:hidden">
              <CaptainCrateSvg variant="head-only" />
            </span>
            <span className="hidden lg:inline-block">
              <Logo />
            </span>
          </a>
          <a
            href="https://upcrate.art/subscribe"
            className="lg:hidden bg-orange hover:bg-pink p-0 font-display py-1"
          >
            <span className="text-white text-lg">
              {t("subscribe_now_button_text")}
            </span>
          </a>
          <div>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <BurgerSvg className={isMenuActive ? "active" : ""} />
            </button>
            <ul
              className={`${
                !isMenuActive ? "hidden" : ""
              } font-bold absolute top-full width-full z-40 left-0 right-0 bg-white text-center lg:relative lg:block lg:flex lg:flex-row text-purple-dark text-2xl lg:items-center`}
            >
              <li className="lg:pr-5 hover:underline">
                <a href="/how-it-works">{t("navigation.how_it_works")}</a>
              </li>
              <li className="lg:pr-5 hover:underline">
                <a href="https://shop.upcrate.art">{t("navigation.shop")}</a>
              </li>
              <li className="lg:pr-5 hover:underline">
                <a href="/crates">{t("navigation.crates")}</a>
              </li>
              <li className="lg:pr-5 hover:underline">
                <a href="/artcrew">{t("navigation.artcrew")}</a>
              </li>
              <li className="lg:pr-15 hover:underline">
                <a href="/about">{t("navigation.about")}</a>
              </li>

              <li className="lg:pr-10 lg:pl-20 hidden lg:block ">
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
                  className="font-display bg-orange hover:bg-pink text-white pt-2 pb-3 text-3xl hidden lg:block"
                >
                  {t("subscribe_now_button_text")}
                </a>
              </li>

              <li
                className="flex items-center gap-3 justify-center py-4 lg:p-0 lg:ml-7 cursor-pointer"
                onClick={() => setLanguageSelectModalOpen(true)}
              >
                {lang === "en" && <a>{t("language_switch_en")}</a>}
                {lang === "de" && <a>{t("language_switch_de")}</a>}
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
