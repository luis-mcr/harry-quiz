import React, { useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data.js";
import { funcionesPuntos } from "../../assets/points.js";

const Quiz = ({ Gri, Sly, Huf, Rav, setGri, setRav, setSly, setHuf }) => {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  const next = () => {
    if (lock === true) {
      if (index + 1 === data.length) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      deselectOption();
      setLock(false);
    }
  };

  //Busca qué casa tiene más puntos y elije un mensaje final
  const searchBigger = () => {
    const maxNumber = Math.max(Gri, Sly, Huf, Rav);
    if (maxNumber === Gri) {
      return "¡Gryffindor! Que sí pesado, que eres el protagonista. ¿Puedes hablar de algo que no sea ti mismo? Hay momentos en los que deberías pedir ayuda, porque casi matas a tus colegas por creerte invencible. ¡Personaje! Qué pereza...";
    } else if (maxNumber === Sly) {
      return "¡SlySlytherin! Eres turbio, pero por lo menos vas de cara y, la verdad,... Mejor que te traicione un hijo de puta, que lo ves venir, y ya te esperas la decepción, que un griffindor... Como cierto viejo con barbas que va de colega pero te usa durante 7 películas para salvarse el culo. Pero claro, después el antiguo pretendiente de tu madres, que perece que te odia, en el fondo te está guardando las espaldas. ¿Quién es un hijo de puta al final de cuentas?";
    } else if (maxNumber === Huf) {
      return "¡Hufflepuff! Y tú te creeías de griffindor. Ser un segundón no es nada malo, tu piensa que tu aportación más importante es no molestar. Vas a vivir más años porque vives tranquilo y sin un pesado con gafas con que casi te mata todo el tiempo porque quiere llamar la atención";
    } else {
      return "¡Ravenclaw! Aunque te hayan dicho que es la casa de los empollones, que no te confundan... ¿De qué casa es el personaje más pedante de HP? Efectivamente, Griffindor. Esta es la casa de la gente inteligente, no pedante. Parece lo mismo, pero no lo es. Es verdad que a veces deberías echarle más huevos a la vida, pero bueno, eres top.";
    }
  };

  //Cambia el color de la opción seleccionada
  const changeColor = (e) => {
    if (lock === false) {
      e.target.classList.add("selected");
    }
  };

  //Quita el color de la opción seleccionada
  const deselectOption = () => {
    const selectedOption = document.querySelector(".selected");
    if (selectedOption) {
      selectedOption.classList.remove("selected");
    }
  };

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
              onClick={(e) => {
                changeColor(e);
                funcionesPuntos[index](
                  1,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                );
              }}
            >
              {question.option1}
            </li>
            <li
              onClick={(e) => {
                changeColor(e);
                funcionesPuntos[index](
                  2,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                );
              }}
            >
              {question.option2}
            </li>
            <li
              onClick={(e) => {
                changeColor(e);
                funcionesPuntos[index](
                  3,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                );
              }}
            >
              {question.option3}
            </li>
            <li
              onClick={(e) => {
                changeColor(e);
                funcionesPuntos[index](
                  4,
                  setRav,
                  setSly,
                  setGri,
                  setHuf,
                  lock,
                  setLock
                );
              }}
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
