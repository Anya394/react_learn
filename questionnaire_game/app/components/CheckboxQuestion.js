import React, { useState } from 'react';
import "./style/CheckboxQuestion.css";

export default function CheckboxQuestion(props) {

  return (
    <div className="options">
      {
        props.options.map((option, index) => (
          <div key={index} className='checkbox'>
              <input
                  type="checkbox"
                  value={option}
                  checked={props.checkedOptions.includes(option)}
                  onChange={(e) => props.onChange(props.id, e.target.value)}

                  className="checkbox-input"
                  id={"checkbox" + index}
              />
              <label className="checkbox-label" htmlFor={"checkbox" + index}>
                <span>{option}</span>
              </label>
          </div>
        ))
      }
    </div>
  );
}