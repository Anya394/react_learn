import React, { useState } from 'react';

export default function CheckboxQuestion(props) {

  return (
    <div>
      {
        props.options.map((option, index) => (
          <div key={index} className='option'>
              <input id={'checkbox'+props.id}
                  type="checkbox"
                  value={option}
                  checked={props.checkedOptions.includes(option)}
                  onChange={(e) => props.onChange(props.id, e.target.value)}
              />
              {option}
          </div>
        ))
      }
    </div>
  );
}