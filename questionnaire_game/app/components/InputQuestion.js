import React, { useState } from 'react';

export default function InputQuestion(props) {

  /*const [inputQuestion, setInputQuestion] = useState("default");

  const handleInputChange = (value) => {
    setInputQuestion(value)
    //console.log(inputQuestion)
  };*/

  return (
    <div>
      <input type='text' value={props.value} onChange={props.onChange}  />
    </div>
  );
}