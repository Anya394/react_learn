import React, { useState } from 'react';
import AnswerOptions from './AnswerOptions';
import RadioQuestion from './RadioQuestion';
import InputQuestion from './InputQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import questions from '../data/questions.json';
import "./style/Survey.css";
import StartPage from "../page.js";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Survey() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const handleInputChange = (questionId, answer) => {
        const existingAnswerIndex = answers.findIndex((a) => a.questionId === questionId);
        console.log(existingAnswerIndex);
        if (existingAnswerIndex !== -1)
        {
            const updatedAnswers = [...answers];
            updatedAnswers[existingAnswerIndex].answer = [answer];
            setAnswers(updatedAnswers);
        }
    };
    const initializationAnswers = () => {
        var answers = [];
        questions.forEach(element => {
            var questionId = element.id;
            answers.push({ questionId, answer: [] });
        });
        return answers;
    };

    const [answers, setAnswers] = useState(initializationAnswers());
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

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    };

    const handleBack = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    };

    const Check = () => {
        console.log(answers)
        //<button onClick={Check} className='btn'>Check</button>
    }

    const Send = async () => {
        const rows = [];

        answers.forEach(item => {
            rows.push(item.answer.toString());
        });
      
        const response = await fetch('api/send', {
            method: 'POST',
            body: JSON.stringify(rows)
        });

        setAnswers(initializationAnswers());
        setCurrentQuestionIndex(0);
    }

    return (
        <div className='question'>
            <h1 key={questions[currentQuestionIndex].id} className='text caption'>{questions[currentQuestionIndex].text}</h1>
            { 
                questions[currentQuestionIndex].multiple ? 
                    <CheckboxQuestion options={questions[currentQuestionIndex].options}
                    checkedOptions={answers[currentQuestionIndex].answer} onChange={handleAnswerSelected} id={questions[currentQuestionIndex].id}/>
                    :  questions[currentQuestionIndex].options.length !== 0 ?
                        <RadioQuestion options={questions[currentQuestionIndex].options}
                        checkedOptions={answers[currentQuestionIndex].answer} onChange={handleAnswerSelected} id={questions[currentQuestionIndex].id}/>
                        : <InputQuestion value={answers[currentQuestionIndex].answer} onChange={handleInputChange} id={questions[currentQuestionIndex].id}/>
            }
            <div className='boxOneStr'>
                {currentQuestionIndex > 0 && <button onClick={handlePrevQuestion} className='btn'>Предыдущий вопрос</button>}
                {currentQuestionIndex < questions.length - 1 && <button onClick={handleNextQuestion} className='btn'>Следующий вопрос</button>}
            </div>
            {currentQuestionIndex == 0 && <Link href="./" className="btn">Назад</Link>}
            {currentQuestionIndex == questions.length - 1 && <button onClick={Send} className='btn'><Link href="./">Send</Link></button>}
        </div>
    );
};