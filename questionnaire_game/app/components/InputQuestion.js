import React, { useState } from 'react';
import "./style/InputQuestion.css";

export default function InputQuestion(props) {

  return (
    <div className="optionsBox">
      <div>
        <input className='input'
          type='text' 
          value={props.value} 
          onChange={(e) => props.onChange(props.id, e.target.value)}
        />
      </div>
    </div>
  );
}