import React from "react";
import './BotaoNumerico.css';


const BotaoNumerico = ({numero, valor, cor}) => {


    return (
        <div className="botao" onClick={() => valor}>
            <div className="interno" style={{background: cor}}>
                <h1 className="numero">
                    {numero}
                </h1>
            </div>
        </div>
    )
}

export default BotaoNumerico;