import React from "react";
import "./styles/Button.css";

const Button = ({ text, isBtnClick, useClick }) => {
  return (
    <button
      className={isBtnClick ? "btn-click" : "btn-restart"}
      onClick={useClick}
    >
      {text}
    </button>
  );
};

export default Button;
