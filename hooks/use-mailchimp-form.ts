import * as React from "react";
import { addMember } from "../utils/mailchimp-add-member";

export function useMailchimpForm() {
  const [email, setEmail] = React.useState("");
  const [terms, setTerms] = React.useState(false);
  const [error, setError] = React.useState<boolean | number>(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [formStatus, setFormStatus] = React.useState<"success" | undefined>(
    undefined
  );

  const handleChange = (event) => {
    setError(false);
    setFormStatus(undefined);

    if (event.target.name === "email") {
      return setEmail(event.target.value);
    }

    if (event.target.name === "terms") {
      return setTerms(!terms);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setIsLoading(true);
    setFormStatus(undefined);

    if (new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email) && terms) {
      const response = await addMember(email);

      // @ts-ignore
      if (response.data) {
        if (response.data.status === 400) {
          setIsLoading(false);
          setError(400);

          return;
        }

        setIsLoading(false);
        return setFormStatus("success");
      }

      setError(true);
      setIsLoading(false);

      return;
    }

    setIsLoading(false);
    setError(true);
  };

  return {
    email,
    terms,
    error,
    isLoading,
    formStatus,
    handleSubmit,
    handleChange,
  };
}
