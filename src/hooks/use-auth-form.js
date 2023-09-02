import { DEFAULT_FORM_ERROR_MESSAGE } from "@/utils/constants";
import { useState, useEffect } from "react";

export function useAuthForm() {
  const [displayError, setDisplayError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_FORM_ERROR_MESSAGE);

  useEffect(() => {
    if (loading) {
      setDisplayError(false);
    }
  }, [loading]);

  const submitForm = async ({
    requestPath,
    requestMethod,
    requestBody,
    successPath,
  }) => {
    setLoading(true);
    setDisplayError(false);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      headers: myHeaders,
      method: requestMethod,
      ...(requestBody ? { body: JSON.stringify(requestBody) } : {}),
      redirect: "follow",
    };

    try {
      const response = await fetch(requestPath, requestOptions);

      if (response.redirected) {
        const redirectUrl = response.url;
        return (window.location.href = redirectUrl);
      }

      if (response.status >= 200 && response.status < 300) {
        return (window.location.href = successPath);
      }

      const result = await response.json();

      setDisplayError(true);
      setErrorMessage(
        result?.message?.join("; ") || DEFAULT_FORM_ERROR_MESSAGE
      );
      setLoading(false);
    } catch (error) {
      setDisplayError(true);
      setErrorMessage(COMMUNICATION_ERROR_MESSAGE);
      setLoading(false);
    }
  };

  return {
    loading,
    displayError,
    errorMessage,
    submitForm,
  };
}
