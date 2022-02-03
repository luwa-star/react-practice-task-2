import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewInput.css";

const NewInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const inputNameHandler = (event) => {
    setInputName(event.target.value);
  };
  const inputAgeHandler = (event) => {
    setInputAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      name: inputName,
      age: inputAge,
    };
    props.onAddInput(inputData);
    setInputName("");
    setInputAge("");
  };
  return (
      <Card  className="form-format">
    <form className="input-form" onSubmit={formSubmitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={inputNameHandler} />
        </div>
        <div className="form-control">
          <label>Age</label>
          <input type="text" value={inputAge} onChange={inputAgeHandler} />
        </div>
      </div>

      <div className="button-wrapper">
        <button type="submit" className="input-button">
          Submit
        </button>
      </div>
    </form>
    </Card>
  );
};
export default NewInput;
