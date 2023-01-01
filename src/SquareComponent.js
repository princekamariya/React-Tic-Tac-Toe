import React from "react";

const SquareComponent = (props) => {
  let classes = props.className ? `${props.className} square` : "square";
  
  return (
    <span className={classes} onClick={props.onClick}>
      {props.state}
    </span>
  );
};

export default SquareComponent;
