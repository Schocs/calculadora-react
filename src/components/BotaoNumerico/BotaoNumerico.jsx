import React from "react";
import './BotaoNumerico.css';


const BotaoNumerico = ({numero, valor}) => {

    return (
        <div className="botao" onClick={() => console.log(valor)}>
            <div className="interno">
                <h1 className="numero">
                    {numero}
                </h1>
            </div>
        </div>
    )
}

export default BotaoNumerico;