import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { useMailchimpForm } from "../../hooks/use-mailchimp-form";
import { Button } from "../elements/button";
import { FormattedText } from "../elements/formatted-text";
import { RadialGradient } from "../elements/radial-gradient";
import { Caret } from "../elements/svg";
import { PensAndBrushesSvg } from "../elements/svg/pens-and-brushes";

export function NewsletterSection({ children }: React.PropsWithChildren<{}>) {
  const { t } = useTranslation("common");

  const {
    email,
    terms,
    hasError,
    isLoading,
    formStatus,
    handleSubmit,
    handleChange,
  } = useMailchimpForm();

  return (
    <section className="text-center text-purple-dark pt-6 pb-6 md:px-10 md:px-32 md:pt-20 md:pb-24 relative overflow-hidden -mt-20 md:-mt-10">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        {children}
        <div
          className={`md:max-w-6xl p-5 md:p-10 py-10 mx-auto md:mt-12 md:pt-32 md:pb-20 text-purple-dark text-xl md:text-3xl bg-green md:rounded md:px-20 relative mb-20 ${
            hasError ? "bg-pink" : ""
          } relative overflow-hidden`}
        >
          <RadialGradient className="bg-purple" variant="top-left" />
          <div className="p-10 relative border-l-2 border-b-2 border-white border-r-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="937.021"
              height="19.513"
              viewBox="0 0 937.021 19.513"
              className="absolute -top-4 left-0 right-0 max-w-full"
              style={{ marginTop: -2 }}
            >
              <path
                id="Path_380"
                data-name="Path 380"
                d="M-1443.67-2246.793h-468.382L-1933-2263.971v17.177h-447.695"
                transform="translate(2380.692 2265.556)"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              />
            </svg>
            <div className="z-20">
              {!formStatus && (
                <>
                  <h4 className="text-purple-dark text-3xl md:text-5xl md:max-w-4xl text-center mx-auto font-display text-center">
                    {t("sections.newsletter_form.title")}
                  </h4>
                  <p className="font-bold md:mt-10">
                    {t("sections.newsletter_form.benefits.0.text")}
                  </p>
                  <p className="font-bold">
                    {t("sections.newsletter_form.benefits.1.text")}
                  </p>
                </>
              )}

              {!formStatus && (
                <form
                  className="md:max-w-md md:mt-10 flex mx-auto flex-col"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <input
                    type="email"
                    className="font-normal text-base p-4"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder={t("forms.email_label")}
                  />

                  <label className="mb-3 flex gap-4 items-center cursor-pointer text-base">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={terms}
                      onChange={handleChange}
                    />{" "}
                    <span>
                      <FormattedText
                        transKey="common:forms.terms_label"
                        delimiter={[
                          <a
                            className="underline hover:text-pink"
                            href="/terms-and-conditions"
                          />,
                        ]}
                      />
                    </span>
                  </label>

                  {hasError && (
                    <p className="text-white text-base bg-pink mt-2">
                      {t("forms.error_message")}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="z-30 font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 bg-green-darker hover:bg-green-dark text-white px-10 mx-auto"
                  >
                    {isLoading ? "Sending..." : "Join Email List"}
                    <span className="inline-block ml-4">
                      <Caret />
                    </span>
                  </button>

                  <p className="text-base mt-5 z-30">
                    <FormattedText
                      transKey="common:forms.privacy_label"
                      delimiter={[
                        <a
                          className="underline hover:text-pink"
                          href="/privacy"
                        />,
                      ]}
                    />
                  </p>
                </form>
              )}

              {formStatus === "success" && (
                <div className="text-3xl md:text-6xl text-center text-white font-display pt-10 pb-20 max-w-4xl mx-auto">
                  {t("forms.success_message")}
                </div>
              )}
              <div className="absolute left-0 right-0 -bottom-36 flex justify-center z-10">
                <PensAndBrushesSvg />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 mb-10 md:mb-0 md:max-w-6xl mx-auto px-10 relative">
          <RadialGradient className="bg-orange w-full" variant="center-xl" />
          <div className="z-10 relative text-purple-dark">
            <h3 className="font-display text-2xl md:text-5xl md:mt-48 block text-white max-w-3xl mx-auto">
              {t("sections.newsletter_form.advantages.title")}
            </h3>

            <div className="md:flex gap-10 md:gap-20 justify-center">
              <div>
                <Image
                  src="/newsletter/advantage01.gif"
                  width={332}
                  height={332}
                  layout="fixed"
                />
                <p className="text-2xl font-bold text-center">
                  {t("sections.newsletter_form.advantages.columns.0.text")}
                </p>
              </div>
              <div>
                <Image
                  src="/newsletter/advantage02.gif"
                  width={332}
                  height={332}
                  layout="fixed"
                />
                <p className="text-2xl font-bold text-center">
                  {t("sections.newsletter_form.advantages.columns.1.text")}
                </p>
              </div>
              <div>
                <Image
                  src="/newsletter/advantage03.gif"
                  width={332}
                  height={332}
                  layout="fixed"
                />
                <p className="text-2xl font-bold text-center">
                  {t("sections.newsletter_form.advantages.columns.2.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
