"use client";

import { useAuthForm } from "@/hooks/use-auth-form";
import BaseForm from "../form";

export default function DeleteHabitLogForm({ habitLog }) {
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
                requestPath: `/api/habits/${habitLog.habitId}/logs/${habitLog.id}`,
                requestMethod: "DELETE",
                successPath: `/habits/${habitLog.habitId}`,
                successMessage: "Log deleted successfully",
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
