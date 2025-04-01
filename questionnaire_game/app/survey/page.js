'use client';

import { useState } from 'react';
import Survey from '../components/Survey';
import "./page.css";

export default function Home() {
  return (
    <main className='main'>
      <Survey />
    </main>
  );
}
  