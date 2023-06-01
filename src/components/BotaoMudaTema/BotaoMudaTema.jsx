import React from 'react';
import './BotaoMudaTema.css';
import seta from '../../assets/right-arrow-svgrepo-com.svg'

const BotaoMudaTema = ({onClick}) => {

    return (
        <>
        <div onClick={onClick} className='mudaTema'> 
            <img src={seta} alt="" className='seta'/>
        </div>
        </>
    )
}

export default BotaoMudaTema