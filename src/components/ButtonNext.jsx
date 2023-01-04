import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNext() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(+1)}>
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </button>
  );
}
