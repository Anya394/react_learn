import React, { useState } from 'react';
import AnswerOptions from './AnswerOptions';
import RadioQuestion from './RadioQuestion';
import InputQuestion from './InputQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import questions from '../data/questions.json';

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

    const Check = () => {
        console.log(answers)
    }

    const Send = async () => {
        const rows = [
            answers.find((a) => a.questionId === 1).answer.toString(),
            answers.find((a) => a.questionId === 2).answer.toString(), 
            answers.find((a) => a.questionId === 3).answer.toString(),
            answers.find((a) => a.questionId === 4).answer.toString()
        ];
      
        const response = await fetch('api/send', {
            method: 'POST',
            body: JSON.stringify(rows)
        });

        setAnswers(initializationAnswers());
        setCurrentQuestionIndex(0);
    }

    return (
        <div>
            <h1 key={questions[currentQuestionIndex].id}>{questions[currentQuestionIndex].text} {questions[currentQuestionIndex].id}</h1>
            { 
                questions[currentQuestionIndex].multiple ? 
                    <CheckboxQuestion options={questions[currentQuestionIndex].options}
                    checkedOptions={answers[currentQuestionIndex].answer} onChange={handleAnswerSelected} id={questions[currentQuestionIndex].id}/>
                    :  questions[currentQuestionIndex].options.length !== 0 ?
                        <RadioQuestion options={questions[currentQuestionIndex].options}
                        checkedOptions={answers[currentQuestionIndex].answer} onChange={handleAnswerSelected} id={questions[currentQuestionIndex].id}/>
                        : <InputQuestion value={answers[currentQuestionIndex].answer} onChange={handleInputChange} id={questions[currentQuestionIndex].id}/>
            }
            {currentQuestionIndex > 0 && <button onClick={handlePrevQuestion}>Предыдущий вопрос</button>}
            {currentQuestionIndex < questions.length - 1 && <button onClick={handleNextQuestion}>Следующий вопрос</button>}
            <button onClick={Check}>Check</button>
            <button onClick={Send}>Send</button>
        </div>
    );
};