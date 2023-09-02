"use client";

import { useAuthForm } from "@/hooks/use-auth-form";
import BaseForm from "../form";

export default function DeleteHabitForm(props) {
  const { habitId } = props;

  const { submitForm, ...visualProps } = useAuthForm();

  return (
    <BaseForm {...visualProps}>
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
    </BaseForm>
  );
}
