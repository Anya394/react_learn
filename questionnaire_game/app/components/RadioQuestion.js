import React, { useState } from 'react';

export default function RadioQuestion(props) {

  return (
    <div>
      {
        props.options.map((option, index) => (
          <div key={index} className='option'>
              <input
                  type="radio"
                  value={option}
                  checked={props.checkedOptions.includes(option)}
                  onChange={() => {}}
                  onClick={(e) => props.onChange(props.id, e.target.value)}
              />
              {option}
          </div>
        ))
          
      }
    </div>
  );
}