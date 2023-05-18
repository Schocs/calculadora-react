import React from "react";
import './BotaoNumerico.css';


const BotaoNumerico = ({numero}) => {

    return (
        <div className="botao">
            <div className="interno">
                <h1 className="numero">
                    {numero}
                </h1>
            </div>
        </div>
    )
}

export default BotaoNumerico;