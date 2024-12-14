import React, { useState } from 'react';
//import AnswerOptions from './AnswerOptions';

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

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    };

    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
        setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div>
            <h1>{questions[currentQuestionIndex].text}</h1>
            { 
                questions[currentQuestionIndex].type == "input" ? 
                <input /> :
                questions[currentQuestionIndex].options.map((option, index) => (
                    <div key={index} className='option'>
                        <input
                        type={questions[currentQuestionIndex].type}
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        />
                        {option}
                    </div>
                ))
            }
            {currentQuestionIndex > 0 && <button onClick={handlePrevQuestion}>Предыдущий вопрос</button>}
            {currentQuestionIndex < questions.length - 1 && <button onClick={handleNextQuestion}>Следующий вопрос</button>}
        </div>
    );
};