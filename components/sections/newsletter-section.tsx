import Image from "next/image";
import React from "react";
import { useMailchimpForm } from "../../hooks/use-mailchimp-form";
import { RadialGradient } from "../elements/radial-gradient";
import { Caret } from "../elements/svg";
import { PensAndBrushesSvg } from "../elements/svg/pens-and-brushes";

export function NewsletterSection({ children }: React.PropsWithChildren<{}>) {
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
    <section className="text-center text-purple-dark pt-6 pb-6 md:px-10 md:px-32 md:pt-20 md:pb-24 relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        {children}
        <div
          className={`md:max-w-6xl p-5 md:p-10 py-10 mx-auto md:mt-12 md:pt-32 md:pb-20 text-purple-dark text-xl md:text-3xl bg-green md:rounded md:px-20 relative mb-20 ${
            hasError ? "bg-pink" : ""
          }`}
        >
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
                    Subscribe to our newsletter for a 15% discount!
                  </h4>
                  <p className="font-bold md:mt-10">
                    - Be among the first to hear about new special offers
                  </p>
                  <p className="font-bold">- Receive exclusive coupon codes </p>
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
                    placeholder="Enter your email adress"
                  />

                  <label className="mb-3 flex gap-4 items-center cursor-pointer text-base">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={terms}
                      onChange={handleChange}
                    />{" "}
                    <span>
                      I have read and agree to the{" "}
                      <a
                        className="underline hover:bg-green-darker"
                        href="/terms-and-conditions"
                        target="_blank"
                      >
                        terms & conditions
                      </a>
                    </span>
                  </label>

                  {hasError && (
                    <p className="text-white text-base bg-pink mt-2">
                      Please fill out all fields
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
                    By entering your email address, you agree to the terms of
                    this{" "}
                    <a href="/privacy" className="underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </form>
              )}

              {formStatus === "success" && (
                <div className="text-3xl md:text-6xl text-center text-white font-display pt-10 pb-20 max-w-4xl mx-auto">
                  Thank you.
                  <br />
                  We will answer you as soon as we have finished the artwork
                </div>
              )}
              <div className="absolute left-0 right-0 -bottom-36 flex justify-center z-10">
                <PensAndBrushesSvg />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 mb-10 md:mb-0 md:max-w-6xl mx-auto px-10">
          <h3 className="font-display text-2xl md:text-5xl md:mt-48 block">
            Advantages of the newsletter subscription:
          </h3>

          <div className="md:flex gap-10 md:gap-20 justify-center">
            <div>
              <Image
                src="/newsletter/advantage01.png"
                width={332}
                height={332}
              />
              <p className="text-2xl font-bold text-center">
                Be the first to know about special offers
              </p>
            </div>
            <div>
              <Image
                src="/newsletter/advantage02.png"
                width={332}
                height={332}
              />
              <p className="text-2xl font-bold text-center">
                Receive exclusive discount codes for our shop
              </p>
            </div>
            <div>
              <Image
                src="/newsletter/advantage03.png"
                width={332}
                height={332}
              />
              <p className="text-2xl font-bold text-center">
                Find out about new events for the art crew!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
