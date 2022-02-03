import React from "react";
import Card from "../UI/Card";
import InputItem from "../InputItem/InputItem";
import "./InputList.css";

const InputList = (props) => {
  return (
      <Card >
    <ul className="input-list">
      {props.items.map((input) => (
        <InputItem key={input.id} id={input.id}>
          {input.name}
          ({input.age} years)
        </InputItem>
      ))}
    </ul>
    </Card>
  );
};
export default InputList;
