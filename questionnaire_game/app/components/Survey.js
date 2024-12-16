import React, { useState } from 'react';
import AnswerOptions from './AnswerOptions';
import RadioQuestion from './RadioQuestion';
import InputQuestion from './InputQuestion';
import CheckboxQuestion from './CheckboxQuestion';

export default function Survey() {
    const questions = [
        {
            id: 1,
            text: 'Ваше имя',
            type: 'input',
            options: []
        },
        {
            id: 2,
            text: 'Что хотите',
            type: 'radio',
            options: ['Option A', 'Option B', 'Option C']
        },
        {
            id: 3,
            text: 'Откуда узнали',
            type: 'checkbox',
            options: ['Answer A', 'Answer B', 'Answer C']
        }
    ];

    const [responses, setResponses] = useState([]);
    const [inputQuestion, setInputQuestion] = useState("default");
    const handleInputChange = (value) => {
        setInputQuestion(value.target.value)
    };

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionsCheckbox, setSelectedOptionsCheckbox] = useState([]);
    const [selectedOptionsRadio, setSelectedOptionsRadio] = useState([]);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    };

    const Check = () => {
        console.log(inputQuestion)
        console.log(selectedOptionsRadio)
        console.log(selectedOptionsCheckbox)
    }

    const Send = async () => {
        const form = {
            a: inputQuestion, 
            b: selectedOptionsRadio.toString(), 
            c: selectedOptionsCheckbox.toString()
        }
      
        const response = await fetch('api/send', {
            method: 'POST',
            body: JSON.stringify(form)
        });
    }

    return (
        <div>
            <h1>{questions[currentQuestionIndex].text}</h1>
            { 
                questions[currentQuestionIndex].type == "input" ? 
                <InputQuestion value={inputQuestion} onChange={handleInputChange} /> : 
                questions[currentQuestionIndex].type == "radio" ?
                <RadioQuestion options={questions[currentQuestionIndex].options} selectedOptions={selectedOptionsRadio} 
                    setSelectedOptions={setSelectedOptionsRadio}/> :
                <CheckboxQuestion options={questions[currentQuestionIndex].options} selectedOptions={selectedOptionsCheckbox} 
                    setSelectedOptions={setSelectedOptionsCheckbox}/>
            }
            {currentQuestionIndex > 0 && <button onClick={handlePrevQuestion}>Предыдущий вопрос</button>}
            {currentQuestionIndex < questions.length - 1 && <button onClick={handleNextQuestion}>Следующий вопрос</button>}
            <button onClick={Check}>Check</button>
            <button onClick={Send}>Send</button>
        </div>
    );
};