"use client";

import { useAuthForm } from "@/hooks/use-auth-form";

export default function DeleteHabitForm(props) {
  const { habitId } = props;

  const { loading, displayError, errorMessage, submitForm } = useAuthForm();

  return (
    <>
      {displayError && (
        <div className="alert alert-warning" role="alert">
          {errorMessage}
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() =>
                submitForm({
                  requestPath: `/api/habits/${habitId}`,
                  requestMethod: "DELETE",
                  successPath: "/",
                })
              }
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => history.back()}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
