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
    const [backBtnCor, setBackBtnCor] = useState('white');
    const [backCalCor, setBackCalCor] = useState('#29465B')

    const handleTheme = () => {
        switch(count) {
            case 1: 
                setNumCor('#FF3131');
                setOpCor('#39ff14');
                setExCor('#21f8f6');
                setEspCor('#ccff02');
                setBodyCor('#1c0127');
                setBackBtnCor('white');
                break;
            case 2:
                setNumCor('#abbf63');
                setOpCor('#f37a5e');
                setExCor('#f33d3c');
                setEspCor('#82c9d9');
                setBodyCor('#401219');
                setBackBtnCor('beige');
                break;
            case 3:
                setNumCor('#829b7c');
                setOpCor('#bf9a8e');
                setExCor('#dcc278');
                setEspCor('#c7bea0');
                setBodyCor('#e5e2d6');
                setBackBtnCor('ligthgrey');
                break;
            case 4:
                setCount(0);
                setNumCor('wheat');
                setOpCor('coral');
                setExCor('cadetblue');
                setEspCor('slateblue');
                setBodyCor('slategrey');
                setBackBtnCor('white');
                break;   
        }
    }

    useEffect(() => {
        handleTheme();
    }, [count]);

    return (
        <>
        <div className='calcBody' style={{background: bodyCor}}>
            <div className='painel'>
                <div className={'display'}>
                    {display}
                </div>
            </div>
            <div className='especiais'>
                <BotaoCalculadora cor={espCor} backCor={backBtnCor} simbolo={'Reset'} valor={'reset'} onClick={reset}/>
                <BotaoCalculadora cor={espCor} backCor={backBtnCor} simbolo={'Clear'} valor={'clear'} onClick={clearDisplay}/>
                <BotaoCalculadora cor={espCor} backCor={backBtnCor} simbolo={'History'} valor={'history'} onClick={isHistoryShown}/>
                <BotaoCalculadora cor={espCor} backCor={backBtnCor} simbolo={'='} valor={'='} onClick={calculate}/>
            </div>
            <div className='teclado'>
                <div className='operadores'>
                    {operadores.map(op => (
                       <BotaoCalculadora cor={opCor} backCor={backBtnCor} simbolo={op} key={op} valor={op} onClick={e => addOpToDisplay(e)} />
                    ))}
                </div>
                <div className='numerico'>
                    {numeros.map(num => (
                        <BotaoCalculadora cor={numCor} backCor={backBtnCor} simbolo={num} valor={num} key={num} onClick={e => addNumToDisplay(e)}/>
                        ))}
                </div>
                <div className='executores'>
                    <BotaoCalculadora cor={exCor} backCor={backBtnCor} simbolo={'Del'} valor={'del'} onClick={delFromDisplay}/>
                    <BotaoCalculadora cor={exCor} backCor={backBtnCor} simbolo={'bª'} valor={'^'} onClick={e => addOpToDisplay(e)}/>
                    <BotaoCalculadora cor={exCor} backCor={backBtnCor} simbolo={'%'} valor={'%'} onClick={percentage}/>
                    <BotaoCalculadora cor={exCor} backCor={backBtnCor} simbolo={'√'} valor={'√'} onClick={sqrt}/>
                </div>
            </div>
        <PopUp trigger={showHistory} setTrigger={setShowHistory} history={history}/>
        </div>
        <button onClick={() => setCount(count + 1)}>muda tema</button>
        </>
    )
}

export default Calculadora;