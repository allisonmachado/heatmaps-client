"use client";

import React, { useEffect } from "react";

export default function ColdStart() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location = "/";
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex">
      <strong role="status">👋 Hi, please wait for the app to load!</strong>
      <div className="spinner-border mx-3" aria-hidden="true"></div>
    </div>
  );
}
