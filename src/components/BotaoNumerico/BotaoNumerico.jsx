import React from "react";
import './BotaoNumerico.css';


const BotaoNumerico = ({numero, valor, cor}) => {

    const passaValor = (e) => {
        console.log(e.target.value);
        return e.target.value;
    }

    return (
        <div className="botao">
            <button className="interno" style={{background: cor}} value={valor} onClick={(e) => passaValor(e, 'value')}>
                    {numero}
            </button>
        </div>
    )
}

export default BotaoNumerico;