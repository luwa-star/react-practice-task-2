import React, { useState } from "react";
import "./App.css";
import NewInput from "./Components/NewInput/NewInput";
import InputList from "./Components/InputList/InputList";
//import InputItem from "./Components/InputItem/InputItem";

function App() {
  const [userData, setUserData] = useState([
    { name: "John Doe", age: "25", id: "I1" },
  ]);
  const addInputHandler = (enteredInputData) => {
    setUserData((prevData) => {
      const updatedData = [...prevData];
      updatedData.unshift({
       ...enteredInputData,
        id: Math.random().toString(),
      });
      return updatedData;
    });
  };

  return (
    <div className="App">
      <NewInput onAddInput={addInputHandler}/>
      <InputList items={userData} />
        
    </div>
  );
}

export default App;
