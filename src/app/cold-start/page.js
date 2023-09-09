"use client";

import React, { useEffect } from "react";
import SingleRowCol from "@/components/single-row-col";

export default function ColdStart() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location = "/";
    }, 1000 * 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SingleRowCol>
        👋 Hello! We are currently undergoing a cold start.
      </SingleRowCol>
      <SingleRowCol>
        We will be ready in just a few minutes. Thanks for your patience! 🕒❄️
      </SingleRowCol>
    </>
  );
}
