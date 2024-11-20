import React from 'react';
import SurveyForm from './components/SurveyForm';
import Result from './components/Result';
import {useState} from 'react';
import './css/App.css';

const App = (props) => {
  return (
    <div>
      <h1>Опросник</h1>
      <SurveyForm />
      <h2>Результаты</h2>
      <Result />
    </div>
  );
}

export default App;
