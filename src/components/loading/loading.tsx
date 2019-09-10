import React from "react";
import LoadingCircle from "./loading-circle";
import "./loading.css";

function Loading() {
  return (
    <div className="loading-wrapper">
      <LoadingCircle />
      <p>Loading</p>
    </div>
  );
}

export default Loading;
