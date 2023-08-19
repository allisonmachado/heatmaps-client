"use client";

import { useState } from "react";

export default function DeleteHabitLog(props) {
  const {
    params: { id: habitId, logId },
    searchParams: { date },
  } = props;

  const [displayError, setDisplayError] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteHabitLog = ({ habitId, logId }) => {
    console.log({ habitId, logId });
    // setLoading(true);
    // const requestOptions = {
    //   method: "DELETE",
    // };
    // fetch(`/api/habits/${id}`, requestOptions)
    //   .then((response) => {
    //     if (response.redirected) {
    //       const redirectUrl = response.url;
    //       window.location.href = redirectUrl;
    //     }
    //     if (response.status >= 200 && response.status < 300) {
    //       setLoading(false);
    //       return (window.location.href = "/");
    //     }
    //     setDisplayError(true);
    //   })
    //   .catch((_err) => {
    //     setLoading(false);
    //     setDisplayError(true);
    //   });
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
          <h1>Delete confirmation</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Are you sure you want to delete the log from {date}?</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() =>
              deleteHabitLog({
                habitId: habitId,
                logId: logId,
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
    </>
  );
}
