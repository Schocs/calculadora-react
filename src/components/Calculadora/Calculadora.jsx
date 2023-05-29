import React, { useState, useEffect } from 'react';
import './Calculadora.css';
import BotaoCalculadora from '../BotaoCalculadora/BotaoCalculadora';

const Calculadora = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '-'];
    const operadores = ['+', '-', '*', '/'];

    const [display, setDisplay] = useState('0');
    const [history, setHistory] = useState([]);

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

    return (
        <div className='calcBody'>
            <div className='painel'>
                <div className='display'>
                    {display}
                </div>
                <div className='historico'></div>
            </div>
            <div className='teclado'>
                <div className='operadores'>
                    {operadores.map(op => (
                       <BotaoCalculadora cor={'pink'} simbolo={op} key={op} valor={op} onClick={e => addOpToDisplay(e)} />
                    ))}
                </div>
                <div className='numerico'>
                    {numeros.map(num => (
                        <BotaoCalculadora cor={'red'} simbolo={num} valor={num} key={num} onClick={e => addNumToDisplay(e)}/>
                        ))}
                </div>
                <div className='executores'>
                    <BotaoCalculadora cor={'grey'} simbolo={'Del'} valor={'del'} onClick={delFromDisplay}/>
                    <BotaoCalculadora cor={'grey'} simbolo={'bª'} valor={'^'} onClick={e => addOpToDisplay(e)}/>
                    <BotaoCalculadora cor={'grey'} simbolo={'%'} valor={'%'} onClick={percentage}/>
                    <BotaoCalculadora cor={'grey'} simbolo={'√'} valor={'√'} onClick={sqrt}/>
                </div>
            </div>
            <div className='especiais'>
                <BotaoCalculadora cor={'white'} simbolo={'='} valor={'='} onClick={calculate}/>
                <BotaoCalculadora cor={'white'} simbolo={'Reset'} valor={'reset'} onClick={resetDisplay}/>
                <BotaoCalculadora cor={'white'} simbolo={'Clear'} valor={'clear'} onClick={resetDisplay}/>
            </div>
        </div>
    )
}

export default Calculadora;