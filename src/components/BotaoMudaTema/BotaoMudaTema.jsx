import React from 'react';
import './BotaoMudaTema.css';
import seta from '../../assets/right-arrow-svgrepo-com.svg'

const BotaoMudaTema = ({onClick, transform, tema}) => {

    return (
        <>
        <div onClick={onClick} className='mudaTema' style={{background: tema}}> 
            <img src={seta} alt="" className='seta' style={{transform: transform}}/>
        </div>
        </>
    )
}

export default BotaoMudaTema