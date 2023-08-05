"use client";

import { useState } from "react";

export default function DeleteHabit(props) {
  const [displayError, setDisplayError] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteHabit = ({ id }) => {
    setLoading(true);

    const requestOptions = {
      method: "DELETE",
    };

    fetch(`/api/habits/${id}`, requestOptions)
      .then((response) => {
        if (response.redirected) {
          const redirectUrl = response.url;
          window.location.href = redirectUrl;
        }

        if (response.status >= 200 && response.status < 300) {
          setLoading(false);
          return (window.location.href = "/");
        }

        setDisplayError(true);
      })
      .catch((_err) => {
        setLoading(false);
        setDisplayError(true);
      });
  };

  return (
    <>
      {loading && <div className="loading-indicator">Loading...</div>}
      {displayError && !loading && (
        <div className="alert alert-warning" role="alert">
          We are having problems communicating with our backend services.
          Please, try again later
        </div>
      )}
      <div className="row">
        <div className="col">
          <h1>Are you sure to delete the habit?</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteHabit({ id: props.params.id })}
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
    </>
  );
}
