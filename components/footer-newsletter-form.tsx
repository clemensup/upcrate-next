import { useMailchimpForm } from "../hooks/use-mailchimp-form";
import { Caret } from "./elements/svg";

export function FooterNewsletterForm() {
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
    <div>
      <h4 className="text-2xl mb-4">
        Join our mailing list to get updates on special offers, the art crew and
        more!
      </h4>
      <form onSubmit={handleSubmit}>
        <label className="mb-3 flex gap-4 items-center cursor-pointer">
          <input
            type="checkbox"
            name="terms"
            checked={terms}
            onChange={handleChange}
          />{" "}
          <span>
            I have read and agree to the{" "}
            <a
              className="underline hover:text-pink"
              href="/terms-and-conditions"
            >
              terms & conditions
            </a>
          </span>
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Your e-mail address"
            className="w-full p-4 text-purple-dark"
            value={email}
            onChange={handleChange}
          />
          <button
            className="absolute top-0 right-2 bottom-0 text-red flex justify-center items-center cursor-pointer"
            type="submit"
          >
            {isLoading ? "Sending..." : <Caret />}
          </button>
        </div>
        {hasError && (
          <p className="text-white text-base bg-pink mt-2 p-2">
            Please fill out all fields
          </p>
        )}
        {formStatus === "success" && (
          <p className="text-white text-base bg-green mt-2 p-2">
            Thank you.
            <br />
            We will answer you as soon as we have finished the artwork
          </p>
        )}
      </form>
    </div>
  );
}
