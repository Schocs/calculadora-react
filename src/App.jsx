import React, { memo, useEffect, useState } from 'react'
import './App.css'
import BotaoCalculadora from './components/BotaoCalculadora/BotaoCalculadora'
import Calculadora from './components/Calculadora/Calculadora';

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

  

  

  const HistoryItem = ({ expression, result }) => {
    return (
      <div>
        <p>{expression} = {result}</p>
      </div>
    );
  };
  
  return (
    <>
    <Calculadora />
{/*       <div className="card">
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
      <Painel display={history}/> */}
    </>
  )
}

export default App
