import React, { memo, useEffect, useState } from 'react'
import './App.css'
import BotaoCalculadora from './components/BotaoCalculadora/BotaoCalculadora'

function App() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '-'];
  const operadores = ['+', '-', '*', '/', '^'];

  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState([]);

  const Painel = memo( function Painel({ display })
  {
    return <div> {display} </div>
  }
  );

  const loadFromMemoryStorage = () => {
    let memory = localStorage.getItem('memoryStorage');
    let history = localStorage.getItem('history').toString();
    if(memory === 0) {
      return
    }
    setDisplay(memory);
    setHistory(history);
  }

  useEffect(() => {
    loadFromMemoryStorage()
  }, [])

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
    setHistory([]);
    localStorage.setItem('history', 0)
    localStorage.setItem('memoryStorage', 0);
  }

  const calculate = () => {
    const numbers = display.split(' ');
    const operator = numbers.pop();
    if(numbers[1] === '^') {
      toThePowerOf(numbers[0], operator);
      return;
    }
    const result = eval(`${numbers.join(' ')} ${operator}`);
    handleResult(result);
  }
  
  const handleResult = (result) => {
    setDisplay(result);
    setHistory([...history, [display, '=', result, '\n']]);
    localStorage.setItem('history', history);
    localStorage.setItem('memoryStorage', result);
  }

  const sqrt = () => {
    const num = parseFloat(display);
    if (isNaN(num)) {
      return;
    }
    handleResult(Math.sqrt(num));
  }

  const percentage = () => {
    const num = parseFloat(display);
    if(isNaN(num)) {
      return;
    }
    handleResult(num/100);
  }

  const toThePowerOf = (x, y) => {
    let res = Math.pow(x, y);
    handleResult(res);
  }

  const HistoryItem = ({ expression, result }) => {
    return (
      <div>
        <p>{expression} = {result}</p>
      </div>
    );
  };
  
  return (
    <>
      <div className="card">
        {numeros.map(num => (
          <BotaoCalculadora simbolo={num} valor={num} key={num} cor={'rgb(243, 243, 4)'} onClick={e => addNumToDisplay(e)}/>
        ))}
      </div>
      <div className='card'>
        {operadores.map(op => (
          <BotaoCalculadora simbolo={op} valor={op} key={op} cor={'white'} onClick={e => addOpToDisplay(e)} />
        ))
        }
      </div>
      <button onClick={delFromDisplay}>apaga</button>
      <button onClick={resetDisplay}>reseta</button>
      <button onClick={calculate}>calcula</button>
      <button onClick={sqrt}>√</button>
      <button onClick={percentage}>%</button>
      <Painel display={display}/>
      <Painel display={history}/>
    </>
  )
}

export default App
