import React, { useState } from 'react';

export default function InputQuestion(props) {

  return (
    <div>
      <input 
        type='text' 
        value={props.value} 
        onChange={(e) => props.onChange(props.id, e.target.value)}
      />
    </div>
  );
}