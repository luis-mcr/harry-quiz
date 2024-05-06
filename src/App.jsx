import React, { useState } from 'react'
import Quiz from './components/Quiz/Quiz';

const App = () => {

  const [Gri, setGri] = useState(0);
  const [Sly, setSly] = useState(0);
  const [Huf, setHuf] = useState(0);
  const [Rav, setRav] = useState(0);

  return (
    <>
      <Quiz/>
    </>
  )
}

export default App;