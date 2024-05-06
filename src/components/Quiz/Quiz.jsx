import React, { useState } from 'react';
import './Quiz.css';
import {data} from '../../assets/data.js';

const Quiz = () => {

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);

  return (
    <div className='container'>
        <h1>Harry Quiz</h1>
        <hr />
        <h2>{index + 1}. {question.question}</h2>
        <ul>
            <li>{question.option1}</li>
            <li>{question.option2}</li>
            <li>{question.option3}</li>
            <li>{question.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">Pregunta 1 de 5</div>
    </div>
  )
}

export default Quiz;