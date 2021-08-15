import React from "react";
import { sendMail } from "../utils/send-mail";

const initialFormData = {
  name: "",
  email: "",
  message: "",
  acceptTerms: false,
};

function ErrorMessage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white py-1 mt-1 px-4 font-bold text-pink text-base md:text-xl">
      {children}
    </div>
  );
}

export function ContactForm() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<
    "submitted" | "success" | "error" | undefined
  >(undefined);

  const handleInputChange = (event) => {
    if (formStatus !== "submitted" && !hasErrors()) {
      setFormStatus(undefined);
    }

    if (event.target.type === "checkbox") {
      return setFormData({
        ...formData,
        [event.target.name]: !formData[event.target.name],
      });
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const hasErrors = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.acceptTerms
    ) {
      return true;
    }

    return false;
  };

  const submitForm = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    setFormStatus("submitted");

    //TODO: validate
    if (hasErrors()) {
      setFormStatus("error");
      setIsLoading(false);
    }

    const res = await sendMail(
      process.env.NEXT_PUBLIC_RECIPIENT_MAIL,
      formData.name,
      formData.email,
      formData.message
    );

    if (res.status < 300) {
      setFormData(initialFormData);
      setFormStatus("success");
      setIsLoading(false);
    } else {
      setFormStatus("error");
      setIsLoading(false);
    }
  };

  const backgroundClass =
    formStatus || isLoading
      ? formStatus === "error"
        ? "bg-pink"
        : "bg-green"
      : "bg-orange";

  return (
    <div
      className={`md:max-w-6xl p-5 md:p-10 py-10 mx-auto mt-12 text-purple-dark text-xl md:text-3xl ${backgroundClass}`}
    >
      <h2 className="font-bold text-center">Need help? Contact us!</h2>
      <p className="text-center mt-2 text-base">
        Don’t be hesitated to contact Captain Crate if you have any question.
        <br />
        just write an email to support@upcrate.art
      </p>

      <div className="mt-10">
        {formStatus !== "success" && (
          <form onSubmit={(event) => submitForm(event)}>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-20 justify-between text-left">
              <div>
                <label className="font-bold flex flex-col">
                  Name
                  <input
                    type="text"
                    className="font-normal text-base p-4"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                {formStatus === "error" && !formData.name && (
                  <ErrorMessage>Please fill in your name.</ErrorMessage>
                )}
              </div>
              <div>
                <label className="font-bold flex flex-col">
                  Email
                  <input
                    type="email"
                    className="font-normal text-base p-4"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formStatus === "error" && !formData.email && (
                    <ErrorMessage>
                      Please enter a valid email address.
                    </ErrorMessage>
                  )}
                </label>
              </div>

              <div className="col-span-2">
                <label className="font-bold flex flex-col">
                  Your Message
                  <textarea
                    className="font-normal text-base p-4"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {formStatus === "error" && !formData.message && (
                    <ErrorMessage>Please type in your message.</ErrorMessage>
                  )}
                </label>
              </div>

              <div className="col-span-2">
                <div className="text-xl flex align-center gap-4">
                  <input
                    type="checkbox"
                    id="accept-terms"
                    className="cursor-pointer h-16 md:h-6 w-16 md:w-6"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="accept-terms" className="cursor-pointer">
                    By providing your email adress you are consenting to the
                    terms of this privacy policy.
                  </label>
                </div>

                {formStatus === "error" && !formData.acceptTerms && (
                  <ErrorMessage>
                    Please accept our terms and condtions.
                  </ErrorMessage>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center content-center mt-5 max-w-max mx-auto bg-purple text-white px-10 mx-auto md:px-20"
            >
              {isLoading ? "Sending…" : "Send"}
            </button>
          </form>
        )}

        {formStatus === "success" && (
          <div className="text-3xl md:text-6xl text-center text-white font-display pt-10 pb-20 max-w-4xl mx-auto">
            Thank you.
            <br />
            We will answer you as soon as we have finished the artwork
          </div>
        )}
      </div>
    </div>
  );
}
