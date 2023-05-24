import React, { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotaoCalculadora from './components/BotaoCalculadora/BotaoCalculadora'

function App() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '-'];
  const operadores = ['+', '-', '*', '/'];

  const [display, setDisplay] = useState('0');

  const Painel = memo( function Painel({ display })
  {
    return <p> {display} </p>
  }
  );

  const addNumToDisplay = (e) => {
    const number = e.target.value;
    if(display === '0') {
      setDisplay(number);
    } else {
      if (number === '.') {
        setDisplay(display + '.');
      } else if (number === '-') {
        setDisplay(display + '-');
      } else {
        setDisplay(display + number);
      }
    }
  }

  const addOpToDisplay = (e) => {
    setDisplay( display + ' ' + e.target.value + ' ' );
  }

  const delFromDisplay = () => {
    if (display === '0' || display.length <= 1) {
      resetDisplay()
    } else if (display.endsWith(' ')) {
      setDisplay(display.slice(0, (display.length - 3)))
    } else {
      setDisplay(display.slice(0, (display.length - 1)))
    }
  }

  const resetDisplay = () => {
    setDisplay('0');
  }

  const calculate = () => {
    const numbers = display.split(' ');
    console.log(numbers, 'numeros');
    const operator = numbers.pop();
    console.log(operator, 'operadores', numbers);
    const result = eval(`${numbers.join(' ')} ${operator}`);
    setDisplay(result);
  }

  const sqrt = () =>{    
    const num = display.split();
    setDisplay(Math.sqrt(num));
  } 

  const percentage = (a, b) => a / 100 * b;

  const power = (a, b) => Math.pow(a, b);

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
          <BotaoCalculadora simbolo={num} valor={num} key={num} cor={'rgb(243, 243, 4)'} onClick={e => addNumToDisplay(e, 'value')}/>
        ))}
      </div>
      <div className='card'>
        {operadores.map(op => (
          <BotaoCalculadora simbolo={op} valor={op} key={op} cor={'white'} onClick={e => addOpToDisplay(e, 'value')} />
        ))
        }
      </div>
      <button onClick={delFromDisplay}>apaga</button>
      <button onClick={resetDisplay}>reseta</button>
      <button onClick={calculate}>calcula</button>
      <button onClick={sqrt}>√</button>
      <Painel display={display}/>
    </>
  )
}

export default App
