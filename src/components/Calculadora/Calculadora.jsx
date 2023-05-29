import React, { useState, useEffect } from 'react';
import './Calculadora.css';
import BotaoCalculadora from '../BotaoCalculadora/BotaoCalculadora';

const Calculadora = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '-'];
    const operadores = ['+', '-', '*', '/'];

    const [display, setDisplay] = useState('0');
    const [history, setHistory] = useState([]);

    return (
        <div className='calcBody'>
            <div className='painel'>
                <div className='display'>

                </div>
                <div className='historico'></div>
            </div>
            <div className='teclado'>
                <div className='operadores'>
                    {operadores.map(op => (
                       <BotaoCalculadora cor={'pink'} simbolo={op} key={op} valor={op} onClick={(e) => console.log(e.target.value)} />
                    ))}
                </div>
                <div className='numerico'>
                    {numeros.map(num => (
                        <BotaoCalculadora cor={'red'} simbolo={num} valor={num} key={num} onClick={(e) => console.log(e.target.value)}/>
                        ))}
                </div>
                <div className='executores'>
                    <BotaoCalculadora cor={'grey'} simbolo={'Del'} valor={'del'}/>
                    <BotaoCalculadora cor={'grey'} simbolo={'bª'} valor={'^'}/>
                    <BotaoCalculadora cor={'grey'} simbolo={'%'} valor={'%'}/>
                    <BotaoCalculadora cor={'grey'} simbolo={'√'} valor={'√'}/>
                </div>
            </div>
        </div>
    )
}

export default Calculadora;