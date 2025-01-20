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
            options: [],
            multiple: false
        },
        {
            id: 2,
            text: 'Что хотите',
            options: ['Option A', 'Option B', 'Option C'],
            multiple: false
        },
        {
            id: 3,
            text: 'Откуда узнали',
            options: ['Answer A', 'Answer B', 'Answer C'],
            multiple: true
        },
        {
            id: 4,
            text: 'Откуда узнали 2',
            options: ['Answer A 2', 'Answer B 2', 'Answer C 2'],
            multiple: true
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [existingQuestionIndex, setExistingQuestionIndex] = useState(0);
    const [inputQuestion, setInputQuestion] = useState("default");
    const handleInputChange = (value) => {
        setInputQuestion(value.target.value)
    };
    const generateAnswer = () => {
        var answers = [];
        questions.forEach(element => {
            var questionId = element.id;
            answers.push({ questionId, answer: [] });
        });
        return answers;
    };

    const [answers, setAnswers] = useState(generateAnswer());
    const handleAnswerSelected = (questionId, answer) => {
        const existingAnswerIndex = answers.findIndex((a) => a.questionId === questionId);
    
        if (existingAnswerIndex !== -1) {
          const updatedAnswers = [...answers];
          if (updatedAnswers[existingAnswerIndex].answer.includes(answer)) {
            updatedAnswers[existingAnswerIndex].answer = updatedAnswers[existingAnswerIndex].answer.filter((item) => item !== answer);
          } else {
            updatedAnswers[existingAnswerIndex].answer = [...updatedAnswers[existingAnswerIndex].answer, answer];
          }
          setAnswers(updatedAnswers);
        } else {
          setAnswers([...answers, { questionId, answer: [answer] }]);
        }
      };

    /*const [responses, setResponses] = useState([]);*/

    const handleNextQuestion = () => {
        const existingAnswerIndex = answers.findIndex((a) => a.questionId === currentQuestionIndex+1);
        setExistingQuestionIndex(existingAnswerIndex);
        console.log(existingAnswerIndex);
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevQuestion = () => {
        const existingAnswerIndex = answers.findIndex((a) => a.questionId === currentQuestionIndex-1);
        setExistingQuestionIndex(existingAnswerIndex);
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    };

    const Check = () => {
        console.log(currentQuestionIndex)
        console.log(existingQuestionIndex)
        console.log(answers)
        console.log(answers[existingQuestionIndex])
        console.log(answers[existingQuestionIndex]?.answer)
        console.log(answers.find((a) => a.questionId === 2).answer.toString())
    }

    const Send = async () => {
        const form = {
            a: inputQuestion, 
            b: answers.find((a) => a.questionId === 2).answer.toString(), 
            c: answers.find((a) => a.questionId === 3).answer.toString()
        }
      
        const response = await fetch('api/send', {
            method: 'POST',
            body: JSON.stringify(form)
        });
    }

    return (
        <div>
            <h1 key={questions[currentQuestionIndex].id}>{questions[currentQuestionIndex].text}</h1>
            { 
                questions[currentQuestionIndex].multiple ? 
                    <CheckboxQuestion options={questions[currentQuestionIndex].options}
                    checkedOptions={answers[existingQuestionIndex].answer} onChange={handleAnswerSelected} id={currentQuestionIndex}/>
                    :  questions[currentQuestionIndex].options.length !== 0 ?
                        <RadioQuestion options={questions[currentQuestionIndex].options}
                        checkedOptions={answers[existingQuestionIndex].answer} onChange={handleAnswerSelected} id={currentQuestionIndex}/>
                        : <InputQuestion value={inputQuestion} onChange={handleInputChange} />
            }
            {currentQuestionIndex > 0 && <button onClick={handlePrevQuestion}>Предыдущий вопрос</button>}
            {currentQuestionIndex < questions.length - 1 && <button onClick={handleNextQuestion}>Следующий вопрос</button>}
            <button onClick={Check}>Check</button>
            <button onClick={Send}>Send</button>
        </div>
    );
};