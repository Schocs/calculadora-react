import React from "react";
import './BotaoNumerico.css';


const BotaoNumerico = ({numero, cor, valor, onClick}) => {

    return (
        <div className="botao">
            <button className="interno" style={{background: cor}} value={valor} onClick={onClick}>
                    {numero}
            </button>
        </div>
    )
}

export default BotaoNumerico;