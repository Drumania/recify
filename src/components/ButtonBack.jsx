import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonBack() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <span className="material-symbols-outlined">arrow_back_ios</span>
    </button>
  );
}
