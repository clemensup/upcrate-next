import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { CaptainCrateSvg } from "./elements/svg/cpt-crate-svg";
import { Logo } from "./elements/svg/logo";
import { Modal, Checkbox, Button } from ".";
import { Dialog } from "@headlessui/react";
import { usePersistLocaleCookie } from "../hooks/use-persistent-locale";
import { motion } from "framer-motion";
import { BurgerButton } from "./elements/burger-button";

const pathMotion = {
  rest: {
    pathLength: 0,
    ease: "linear",
    duration: 0.5,
    type: "tween",
  },
  hover: {
    pathLength: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
};

function HeaderNavLink({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <motion.div
      className="relative cursor-pointer p-2"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Link href={href}>
        <div>
          <div className="absolute top-0 left-0">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124.016 35.815"
              className="w-full"
            >
              <motion.path
                d="M-227.328-157.688q36.632-.322,73.262.262a270.754,270.754,0,0,1-73.309,27l113.412-13.66A169.871,169.871,0,0,0-210.3-145.5c33.541-4.485,67.086-8.971,100.5-14.3"
                transform="translate(230.375 163.237)"
                fill="none"
                stroke="#94d4b8"
                strokeMiterlimit="10"
                strokeWidth="6"
                variants={pathMotion}
              />
            </motion.svg>
          </div>
          {children}
        </div>
      </Link>
    </motion.div>
  );
}

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
    <motion.header
      className="sticky top-0 z-30 bg-white"
      animate={{ y: [-50, 0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        className={`mx-auto p-2 lg:px-4 relative transition-all	duration-200`}
      >
        <nav className="flex justify-between items-center cursor-pointer">
          <Link href="/">
            <div className="inline-block">
              <span className="inline-block lg:hidden">
                <CaptainCrateSvg variant="head-only" />
              </span>
              <span className="hidden lg:block w-48">
                <Logo />
              </span>
            </div>
          </Link>
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
              className="lg:hidden absolute right-2 top-4"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <BurgerButton isOpen={isMenuActive} />
            </button>
            <ul
              className={`${
                !isMenuActive ? "hidden" : ""
              } font-bold absolute top-full width-full z-40 left-0 right-0 bg-white text-center lg:relative lg:block lg:flex lg:flex-row text-purple-dark text-xl lg:items-center`}
            >
              <li className="lg:pr-5">
                <HeaderNavLink href="/how-it-works">
                  {t("navigation.how_it_works")}
                </HeaderNavLink>
              </li>
              <li className="lg:pr-5">
                <HeaderNavLink href="https://shop.upcrate.art">
                  {t("navigation.shop")}
                </HeaderNavLink>
              </li>
              <li className="lg:pr-5">
                <HeaderNavLink href="/crates">
                  {t("navigation.crates")}
                </HeaderNavLink>
              </li>
              <li className="lg:pr-5">
                <HeaderNavLink href="/artcrew">
                  {t("navigation.artcrew")}
                </HeaderNavLink>
              </li>
              <li className="lg:pr-15">
                <HeaderNavLink href="/about">
                  {t("navigation.about")}
                </HeaderNavLink>
              </li>

              <li className="lg:pr-10 lg:pl-20 hidden lg:block ">
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="https://shop.upcrate.art/account"
                    className="fill-current text-purple-dark"
                  >
                    <CaptainCrateSvg />
                  </a>
                </motion.div>
              </li>

              <li>
                <Button
                  href="https://shop.upcrate.art/subscribe"
                  className="font-display bg-orange hover:bg-pink text-white pt-2 pb-3 text-3xl hidden lg:block"
                >
                  {t("subscribe_now_button_text")}
                </Button>
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
    </motion.header>
  );
}
