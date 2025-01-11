import React, { useState } from 'react';

export default function RadioQuestion(props) {

  const handleRadioChange = (option) => {
    if (props.selectedOptions.includes(option)) {
      props.setSelectedOptions(props.selectedOptions.filter((item) => item !== option));
    } else {
      props.setSelectedOptions([...props.selectedOptions, option]);
    }
};

  return (
    <div>
      {
        props.options.map((option, index) => (
          <div key={index} className='option'>
              <input
                  type="radio"
                  value={option}
                  checked={props.selectedOptions.includes(option)}
                  onChange={() => {}}
                  onClick={() => handleRadioChange(option)}
              />
              {option}
          </div>
        ))
          
      }
    </div>
  );
}