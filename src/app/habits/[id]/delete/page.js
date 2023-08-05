'use client'

import { useState } from "react";

export default function DeleteHabit(props) {
  const [displayError, setDisplayError] = useState(false);

  const deleteHabit = ({
    id
  }) => {
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
          return window.location.href = '/';
        }

        return response;
      })
      .then((_r) => {
        setDisplayError(true);
      })
      .catch((_err) => {
        setDisplayError(true);
      });
  }
  return (
    <>
      {displayError && (
        <div className="alert alert-warning" role="alert">
          We are having problems communicating with our backend services. Please, try again later
        </div>
      )}
      <div className="row">
        <div className="col">
          <h1>Are you sure to delete the habit?</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-danger" onClick={() => deleteHabit({ id: props.params.id })}>
            Yes
          </button>
          <button type="button" className="btn btn-link" onClick={() => history.back()}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
