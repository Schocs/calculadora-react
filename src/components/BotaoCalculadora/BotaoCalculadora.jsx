import React from "react";
import './BotaoCalculadora.css';


const BotaoCalculadora = ({simbolo, cor, valor, onClick, backCor}) => {

    return (
        <div className="botao" style={{background: backCor}}>
            <button className="interno" style={{background: cor}} value={valor} onClick={onClick}>
                    {simbolo}
            </button>
        </div>
    )
}

export default BotaoCalculadora;