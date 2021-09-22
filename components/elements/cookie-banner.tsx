import React from "react";
import { Button } from "./button";
import { useCookies } from "react-cookie";
import { Modal } from "../modal";
import { Dialog } from "@headlessui/react";
import { Checkbox } from "./checkbox";
import useTranslation from "next-translate/useTranslation";

export function useGoogleAnalytics() {
  const [cookies] = useCookies(["COOKIE_CONSENT"]);

  // @ts-ignore
  gtag("consent", "update", {
    analytics_storage: cookies["COOKIE_CONSENT"] ? "granted" : "denied",
    ad_storage: cookies["COOKIE_CONSENT"] ? "granted" : "denied",
  });
}

export function CookieBanner() {
  const { t } = useTranslation("common");
  const [cookies, setCookie] = useCookies(["COOKIE_CONSENT"]);
  const [showCookieSettings, setShowCookieSettings] = React.useState(false);
  const [cookieConsent, setCookieConsent] = React.useState(
    cookies["COOKIE_CONSENT"]
  );

  const updateGoogleAnalytics = () => {
    // @ts-ignore
    gtag("consent", "update", {
      analytics_storage: cookieConsent ? "granted" : "denied",
      ad_storage: cookieConsent ? "granted" : "denied",
    });
  };

  React.useEffect(() => {
    updateGoogleAnalytics();
  }, [cookieConsent]);

  return (
    <>
      <Modal
        open={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
        className="bg-orange"
      >
        <Dialog.Title
          as="h3"
          className="text-3xl sm:text-4xl mb-4 text-purple-dark font-medium text-center font-display"
        >
          {t("cookies.settings.title")}
        </Dialog.Title>
        {t("cookies.settings.description")}
        <div className="my-10 grid space-y-4 sm:space-y-8">
          <Checkbox
            name="necessary"
            value="necessary"
            checked
            label={t("cookies.settings.necessary_cookies")}
            disabled
          />
          <Checkbox
            name="non-necessary"
            value="non-necessary"
            checked={cookieConsent}
            label={t("cookies.settings.unnecessary_cookies")}
            onChange={() => setCookieConsent(!cookieConsent)}
          />
        </div>
        <div className="flex space-x-4 sm:space-x-10 text-center justify-center">
          <Button
            onClick={() => {
              updateGoogleAnalytics();
              setShowCookieSettings(false);
            }}
            className="border-purple border-2 text-purple"
          >
            cancel
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setCookie("COOKIE_CONSENT", Boolean(cookieConsent));
              updateGoogleAnalytics();
              setShowCookieSettings(false);
            }}
            className="bg-purple text-white border-2 border-purple"
          >
            save
          </Button>
        </div>
      </Modal>
      {cookies["COOKIE_CONSENT"] === undefined && (
        <div className="text-purple-dark">
          <div className="fixed top-0 right-0 bottom-0 left-0 z-40"></div>

          <div className="fixed bottom-0 left-0 right-0 bg-orange p-12 z-50">
            <div className="max-w-8xl mx-auto">
              <div className="grid grid-cols-4 md:space-x-20">
                <div className="col-span-4 md:col-span-2 text-left">
                  <h3 className="text-4xl font-display mb-4">
                    {t("cookies.title")}
                  </h3>
                  <p className="col-span-4 md:col-span-2 whitespace-pre-line">
                    {t("cookies.description")}
                  </p>
                </div>
                <div className="col-span-4 md:col-span-1 flex flex-col md:space-y-5 space-y-2">
                  <Button
                    className="border-4 border-purple text-purple mt-10 md:mt-0"
                    onClick={() => setShowCookieSettings(true)}
                  >
                    {t("cookies.settings_button")}
                  </Button>
                  <Button
                    className="border-4 border-purple text-purple md:mt-0"
                    onClick={() => setCookie("COOKIE_CONSENT", false)}
                  >
                    {t("cookies.deny_button")}
                  </Button>
                </div>
                <div className="col-span-4 md:col-span-1 mt-5 md:mt-0 flex items-end">
                  <Button
                    className="border-4 border-purple text-white bg-purple"
                    onClick={() => setCookie("COOKIE_CONSENT", true)}
                  >
                    {t("cookies.accept_button")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
