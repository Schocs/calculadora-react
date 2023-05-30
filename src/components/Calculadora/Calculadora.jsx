import React, { useState, useEffect } from 'react';
import './Calculadora.css';
import BotaoCalculadora from '../BotaoCalculadora/BotaoCalculadora';
import PopUp from '../PopUp/PopUp';

const Calculadora = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '-'];
    const operadores = ['+', '-', '*', '/'];

    const [display, setDisplay] = useState('0');
    const [history, setHistory] = useState([]);

    const loadFromMemoryStorage = () => {
        let memory = localStorage.getItem('memoryStorage');
        let store = localStorage.getItem('history');
        if(memory === 0) {
          return
        }
        setDisplay(memory);
        setHistory(store.split(','));
      }

    useEffect(() => {
        loadFromMemoryStorage()
    }, [])

    const addNumToDisplay = (e) => {
        let number = e.target.value;
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
            clearDisplay()
        } else if (display.endsWith(' ')) {
            setDisplay(display.slice(0, (display.length - 3)))
        } else {
            setDisplay(display.slice(0, (display.length - 1)))
        }
    }

    const reset= () => {
        setDisplay('0');
        setHistory('0');
        localStorage.setItem('history', '0')
        localStorage.setItem('memoryStorage', '0');
    }

    const clearDisplay = () => {
        setDisplay('0');
        localStorage.setItem('memoryStorage', '0');
    }

    const sqrt = () => {
        let num = parseFloat(display);
        if (isNaN(num)) {
            return;
        }
        handleResult(Math.sqrt(num));
    }

    const percentage = () => {
        let num = parseFloat(display);
        if(isNaN(num)) {
            return;
        }
        handleResult(num/100);
    }

    const toThePowerOf = (x, y) => {
        let res = Math.pow(x, y);
        handleResult(res);
    }

    const calculate = () => {
        let numbers = display.split(' ');
        let operator = numbers.pop();
        if(numbers[1] === '^') {
            toThePowerOf(numbers[0], operator);
            return;
        }
        let result = eval(`${numbers.join(' ')} ${operator}`);
        handleResult(result);
    }
    
    const handleResult = (result) => {
        let store = [display, ' = ', result];
        setDisplay(result);
        setHistory(store);
        localStorage.setItem('memoryStorage', result);
        localStorage.setItem('history', store);
    }

    const [showHistory, setShowHistory] = useState(false);
    const isHistoryShown = () => {
        setShowHistory(!showHistory);
    }

    const [count, setCount] = useState(0);
    const [numCor, setNumCor] = useState('wheat');
    const [opCor, setOpCor] = useState('coral');
    const [exCor, setExCor] = useState('cadetblue');
    const [espCor, setEspCor] = useState('slateblue');
    const [bodyCor, setBodyCor] = useState('slategrey');

    const handleTheme = () => {
        switch(count) {
            case 1: {
                setNumCor()
            }
        }
    }

    return (
        <div className='raiz'>
        <div className='calcBody' style={{background: bodyCor}}>
            <div className='painel'>
                <div className={'display'}>
                    {display}
                </div>
            </div>
            <div className='teclado'>
                <div className='operadores'>
                    {operadores.map(op => (
                       <BotaoCalculadora cor={opCor} simbolo={op} key={op} valor={op} onClick={e => addOpToDisplay(e)} />
                    ))}
                </div>
                <div className='numerico'>
                    {numeros.map(num => (
                        <BotaoCalculadora cor={numCor} simbolo={num} valor={num} key={num} onClick={e => addNumToDisplay(e)}/>
                        ))}
                </div>
                <div className='executores'>
                    <BotaoCalculadora cor={exCor} simbolo={'Del'} valor={'del'} onClick={delFromDisplay}/>
                    <BotaoCalculadora cor={exCor} simbolo={'bª'} valor={'^'} onClick={e => addOpToDisplay(e)}/>
                    <BotaoCalculadora cor={exCor} simbolo={'%'} valor={'%'} onClick={percentage}/>
                    <BotaoCalculadora cor={exCor} simbolo={'√'} valor={'√'} onClick={sqrt}/>
                </div>
            </div>
            <div className='especiais'>
                <BotaoCalculadora cor={espCor} simbolo={'='} valor={'='} onClick={calculate}/>
                <BotaoCalculadora cor={espCor} simbolo={'History'} valor={'history'} onClick={isHistoryShown}/>
                <BotaoCalculadora cor={espCor} simbolo={'Reset'} valor={'reset'} onClick={reset}/>
                <BotaoCalculadora cor={espCor} simbolo={'Clear'} valor={'clear'} onClick={clearDisplay}/>
            </div>
            <PopUp trigger={showHistory} setTrigger={setShowHistory} history={history}/>
        </div>
        </div>
    )
}

export default Calculadora;