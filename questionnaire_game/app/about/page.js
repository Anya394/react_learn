'use client';

import { useState } from 'react';
import Survey from '../components/Survey';

export default function Home() {

  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
   
  const buttonHandler = async () => {
    const form = {
      a, b, c
    }

    const response = await fetch('api/send', {
      method: 'POST',
      body: JSON.stringify(form)
    });

    const content = await response.json();

    console.log(content);
  }

  return (
    <main>
      <Survey />
      <div>
        <label>q1 </label>
        <input type="text" id="q1" onChange={e => setA(e.target.value)}/>
      </div>
      <div>
        <label>q2 </label>
        <input type="text" id="q2" onChange={e => setB(e.target.value)}/>
      </div>
      <div>
        <label>q3 </label>
        <input type="text" id="q3" onChange={e => setC(e.target.value)}/>
      </div>
      <div>
          <button type="button" onClick={buttonHandler}>Добавить</button>
      </div>
    </main>
  );
}
  