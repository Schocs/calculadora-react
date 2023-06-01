import React, { useEffect, useState } from 'react';
import './App.css'
import Calculadora from './components/Calculadora/Calculadora';
import BotaoMudaTema from './components/BotaoMudaTema/BotaoMudaTema';

function App() {

  const [count, setCount] = useState(0)

  const takeCount = () => {
    if(count == 1) {
      setCount(4);
      return
    }
    if(count == 0) {
      setCount(3);
      return
    }
    setCount(count - 1);
    return
  }

  const [tema, setTema] = useState('wheat');

  const handleTheme = () => {
    switch(count) {
      case 1:
        setTema('rgb(64, 27, 78)');
        break;
      case 2:
        setTema('rgb(95, 28, 38)')
        break;
      case 3:
        setTema('rgb(130, 155, 124)');
        break;
      case 4:
        setTema('rgb(245, 222, 179)');
        break;  
    }
  }

  return (
    <div className='appBody' style={{background: tema}} >
      <BotaoMudaTema transform={'scaleX(-1)'} onClick={takeCount} className='esq' tema={tema}/>
      <Calculadora className='calc' count={count} setCount={setCount} temaPag={handleTheme} />
      <BotaoMudaTema onClick={() => setCount(count + 1)} className='dir' tema={tema}/>
    </div>
  )
}

export default App
