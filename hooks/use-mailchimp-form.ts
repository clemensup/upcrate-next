import * as React from "react";
import { addMember } from "../utils/mailchimp-add-member";

export function useMailchimpForm() {
  const [email, setEmail] = React.useState("");
  const [terms, setTerms] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [formStatus, setFormStatus] = React.useState<"success" | undefined>(
    undefined
  );

  const handleChange = (event) => {
    setHasError(false);
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
    setHasError(false);
    setIsLoading(true);
    setFormStatus(undefined);

    if (new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email) && terms) {
      const response = await addMember(email);

      if (response.data) {
        setIsLoading(false);
        return setFormStatus("success");
      }

      setHasError(true);
      setIsLoading(false);

      return;
    }

    setIsLoading(false);
    setHasError(true);
  };

  return {
    email,
    terms,
    hasError,
    isLoading,
    formStatus,
    handleSubmit,
    handleChange,
  };
}
