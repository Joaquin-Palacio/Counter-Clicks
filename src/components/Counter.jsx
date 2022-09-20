import React from "react";
import "./styles/Counter.css";

const Counter = ({ totalClicks }) => {
  return (
    <div className="counter">
      {totalClicks}
    </div>
  ) 
};

export default Counter;
