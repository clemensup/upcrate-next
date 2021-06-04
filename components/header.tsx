import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { CaptainCrateSvg } from "./svg/cpt-crate-svg";
import { Logo } from "./svg/logo";
import { Modal } from "./modal";
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
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {t("language_switch_dialog_title")}
                  </Dialog.Title>
                  <div className="mt-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="checked-de"
                        value="de"
                        checked={selectedLanguage === "de"}
                        className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                      />
                      <span className="text-gray-900 font-medium">
                        {t("language_switch_de_long")}
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="checked-en"
                        value="en"
                        checked={selectedLanguage === "en"}
                        className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                      />
                      <span className="text-gray-900 font-medium">
                        {t("language_switch_en_long")}
                      </span>
                    </label>

                    <div>
                      <button onClick={() => setLanguageSelectModalOpen(false)}>
                        {t("cancel")}
                      </button>
                      <button onClick={saveSelectedLanguage}>
                        {t("save")}
                      </button>
                    </div>
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
