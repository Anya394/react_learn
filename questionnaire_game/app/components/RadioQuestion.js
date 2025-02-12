import React, { useState } from 'react';
import "./style/RadioQuestion.css";
export default function RadioQuestion(props) {

  return (
    <div className="options">
      {
        props.options.map((option, index) => (
          <div key={index} className='radio'>
              <input
                  type="radio"
                  value={option}
                  checked={props.checkedOptions.includes(option)}
                  onChange={() => {}}
                  onClick={(e) => props.onChange(props.id, e.target.value)}

                  className="radio-input"
                  id={"radio" + index}
              />
              <label className="radio-label" htmlFor={"radio" + index}>
                {option}
              </label>
              <img
                className="img"
                src="_next\static\media\cat.5acbc9f3.png"
                alt="cat1" />
          </div>
        ))
      }
    </div>
  );
}