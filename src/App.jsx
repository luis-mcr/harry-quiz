import React, { useState } from 'react'
import Quiz from './components/Quiz/Quiz';

const App = () => {
  // Se hace referencia a las casas de Harry Potter
  const [Gri, setGri] = useState(0);
  const [Sly, setSly] = useState(0);
  const [Huf, setHuf] = useState(0);
  const [Rav, setRav] = useState(0);

  return (
    <>
      <Quiz Gri={Gri} Sly={Sly} Huf={Huf} Rav={Rav} setGri={setGri} setSly={setSly} setHuf={setHuf} setRav={setRav}/>
    </>
  )
}

export default App;