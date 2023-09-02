"use client";

import { useAuthForm } from "@/hooks/use-auth-form";
import { useState } from "react";

export default function HabitForm({ habit }) {
  const isCreateForm = !habit;

  const [title, setTitle] = useState(habit?.title ?? "");
  const [color, setColor] = useState(
    habit?.color ? `#${habit.color}` : "#000000"
  );
  const [type, setType] = useState(habit?.type ?? "");

  const { loading, displayError, errorMessage, submitForm } = useAuthForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestPath = isCreateForm
      ? "/api/habits"
      : `/api/habits/${habit.id}`;
    const requestMethod = isCreateForm ? "POST" : "PUT";

    submitForm({
      requestPath,
      requestMethod,
      requestBody: {
        ...(isCreateForm ? {} : { id: habit.id }),
        title,
        color: color.slice(1),
        ...(isCreateForm ? { type } : {}),
      },
      successPath: "/",
    });
  };

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="titleInput" className="form-label">
              Title:
              <input
                type="text"
                className="form-control"
                id="titleInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          {isCreateForm && (
            <div>
              <label htmlFor="typeSelect" className="form-label">
                Type:
                <select
                  id="typeSelect"
                  className="form-control"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select a type</option>
                  <option value="Timer">Timer</option>
                  <option value="Binary">Binary</option>
                </select>
              </label>
            </div>
          )}
          <div>
            <label htmlFor="colorPicker" className="form-label">
              Color:
              <input
                type="color"
                id="colorPicker"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Submit
          </button>
        </form>
      )}
    </>
  );
}
