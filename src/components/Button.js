import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.hasHighlight ? "highlight" : "no-highlight"} ${props.hasTwoColumns ? "spans-two" : ""} ${props.isSecondary ? "secondary-buttons" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(props.text);
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
