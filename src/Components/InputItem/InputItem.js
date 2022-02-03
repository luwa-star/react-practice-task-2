import React from "react";

import "./InputItem.css";

const InputItem = (props) => {
  return <li className="input-item">{props.children}</li>;
};
export default InputItem;
