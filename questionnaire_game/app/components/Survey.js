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
        },
        {
            id: 4,
            text: 'Откуда узнали 2',
            type: 'checkbox',
            options: ['Answer A 2', 'Answer B 2', 'Answer C 2']
        }
    ];

    const selectedOptionsDefault = [
        {
            id: 1,
            options: []
        },
        {
            id: 2,
            options: []
        },
        {
            id: 3,
            options: []
        },
        {
            id: 4,
            options: []
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
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleNextQuestion = () => {
        //debugger;
        let isExistItem = false;
        selectedOptions.map((item, index) => {
            if (item.id == currentQuestionIndex)
                isExistItem = true;
        })
        
        saveSelectedOptions(isExistItem);
        setSelectedOptionsCheckbox([])
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        if (isExistItem)
            setSelectedOptionsCheckbox(selectedOptions[currentQuestionIndex].options);
    };

    const handlePrevQuestion = () => {
        debugger;
        let isExistItem = false;
        selectedOptions.map((item, index) => {
            if (item.id == currentQuestionIndex)
                isExistItem = true;
        })
        
        saveSelectedOptions(isExistItem);
        setSelectedOptionsCheckbox([])
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        selectedOptions.map((item, index) => {
            if (item.id == currentQuestionIndex)
                isExistItem = true;
        })
        if (isExistItem)
            setSelectedOptionsCheckbox(selectedOptions[currentQuestionIndex].options);
    };

    const saveSelectedOptions = (isExistItem) => {
        if (isExistItem)
        {
            let options = selectedOptions[currentQuestionIndex].options;
            selectedOptionsCheckbox.map((option, index) => {
                if (options != null && !options.includes(option))
                {
                    options.push(option);
                    setSelectedOptions([...selectedOptions, {id: currentQuestionIndex, options: options}]);
                }
            })
        }
        else
        {
            setSelectedOptions([...selectedOptions, {id: currentQuestionIndex, options: selectedOptionsCheckbox}]);
        }

        //setSelectedOptionsCheckbox([])
    }

    const Check = () => {
        console.log(inputQuestion)
        console.log(selectedOptionsRadio)
        console.log(selectedOptionsCheckbox)
        console.log(selectedOptions)
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
                <CheckboxQuestion id={questions[currentQuestionIndex].id} options={questions[currentQuestionIndex].options} selectedOptions={selectedOptionsCheckbox} 
                    setSelectedOptions={setSelectedOptionsCheckbox}/>
            }
            {currentQuestionIndex > 0 && <button onClick={handlePrevQuestion}>Предыдущий вопрос</button>}
            {currentQuestionIndex < questions.length - 1 && <button onClick={handleNextQuestion}>Следующий вопрос</button>}
            <button onClick={Check}>Check</button>
            <button onClick={Send}>Send</button>
        </div>
    );
};