import React, { memo, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotaoNumerico from './components/BotaoNumerico/BotaoNumerico'

function App() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [display, setDisplay] = useState('0');

  const Painel = memo( function Painel({ display })
  {
    return <p> {display} </p>
  }
  );

  const calc = (e) => {
    if(display === '0') {
      setDisplay(e.target.value);
    } else {
      setDisplay(display + e.target.value);
    }
  }

  const del = () => {
    if(display.length > 1) {
      console.log('fica', display.length)
      if(display !== '0') {
        setDisplay(display.slice(0, (display.length - 1)))
      } 
    } 
    else {
      reseta();
    }
  }

  const reseta = () => {
    setDisplay('0');
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {numeros.map(num => (
          <BotaoNumerico numero={num} valor={num} key={num} cor={'rgb(243, 243, 4)'} onClick={e => calc(e, 'value')}/>
        ))}
      </div>
      <button onClick={del}>apaga</button>
      <button onClick={reseta}>reseta</button>
      <Painel display={display}/>
    </>
  )
}

export default App
