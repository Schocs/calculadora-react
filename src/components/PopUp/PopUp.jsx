import React from 'react';

const PopUp = (props) => {

    return props.trigger ? (
        <div className={'Pop'}>
            <div className={'topPop'}>
                <div className={'title'}>
                    History:
                </div>
            </div>
            <div className={'mainPop'}>
                {props.history}
            </div>
            <button className={'botPop'} onClick={() => props.setTrigger(false)}>
                    Close
            </button>
        </div>
    ) : 
    ""
}

export default PopUp;