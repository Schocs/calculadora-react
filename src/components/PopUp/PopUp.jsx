import React from 'react';
import './PopUp.css'

const PopUp = (props) => {

    return props.trigger ? (
        <div className='Pop' style={{background: props.backCor}}>
            <div className='topPop'>
                <div className='title'>
                    History:
                </div>
            </div>
            <div className='mainPop'>
                {props.history}
            </div>
            <div className='botPop'>
                <button onClick={() => props.setTrigger(false)} style={{background: props.btnCor}}>
                        Close
                </button>
            </div>
        </div>
    ) : 
    ""
}

export default PopUp;