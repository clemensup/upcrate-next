import * as React from "react";
import { addMember } from "../utils/newsletter-add-member";

export function useNewsletterForm() {
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

      console.log(response.data);

      if (!response.data) {
        setError(true);
        setIsLoading(false);

        return;
      }

      // @ts-ignore
      if (response.data.success === false) {
        setIsLoading(false);
        setError(response.data.data);

        return;
      }

      setIsLoading(false);
      return setFormStatus("success");
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
