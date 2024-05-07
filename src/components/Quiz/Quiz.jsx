import React, { useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data.js";
import { funcionesPuntos } from "../../assets/points.js";

const Quiz = ({ Gri, Sly, Huf, Rav, setGri, setRav, setSly, setHuf }) => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  const next = () => {
    if (lock === true) {
      if (index + 1 === data.length) {
        setResult(true);
        return 0;
      }
      setIndex(index + 1);
      setQuestion(data[index]);
      setLock(false);
    }
  };

  const searchBigger = () => {
    const maxNumber = Math.max(Gri, Sly, Huf, Rav);
    if (maxNumber === Gri) {
      return "Griffindor";
    } else if (maxNumber === Sly) {
      return "SlySlytherin";
    } else if (maxNumber === Huf) {
      return "Hufflepuff";
    } else {
      return "Ravenclaw";
    }
  };

  const changeColor = (e) => {
    e.target.classList.add("selected");
  }

  return (
    <div className="container">
      <h1>Harry Quiz</h1>
      <hr />
      {result ? (
        <>
          <h2>Tu casa es {searchBigger()}</h2>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              onClick={() =>
                funcionesPuntos[index](
                  1,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                )
              }
            >
              {question.option1}
            </li>
            <li
              onClick={() =>
                funcionesPuntos[index](
                  2,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                )
              }
            >
              {question.option2}
            </li>
            <li
              onClick={() =>
                funcionesPuntos[index](
                  3,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                )
              }
            >
              {question.option3}
            </li>
            <li
              onClick={() =>
                funcionesPuntos[index](
                  4,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                )
              }
            >
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            Pregunta {index + 1} de {data.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
