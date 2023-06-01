import React, { useState } from 'react';
import './App.css'
import Calculadora from './components/Calculadora/Calculadora';
import BotaoMudaTema from './components/BotaoMudaTema/BotaoMudaTema';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <Calculadora className='calc' count={count} setCount={setCount}/>
    <BotaoMudaTema />
    </>
  )
}

export default App
