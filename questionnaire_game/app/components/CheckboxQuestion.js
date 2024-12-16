import React, { useState } from 'react';

export default function CheckboxQuestion(props) {
  
  const handleCheckboxChange = (option) => {
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
                  type="checkbox"
                  value={option}
                  checked={props.selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
              />
              {option}
          </div>
        ))
          
      }
    </div>
  );
}