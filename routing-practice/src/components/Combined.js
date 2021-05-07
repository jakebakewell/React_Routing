import React from 'react';

const Combined = (props) => {
    let num = true;
    if (isNaN(+props.numberorword)) {
        num = false;
    }
    return (
        <div>
            {
                num ? <h1 style={{backgroundColor: props.backgroundcolor, color: props.textcolor}}>The number is: {props.numberorword}</h1> : 
                <h1 style={{backgroundColor: props.backgroundcolor, color: props.textcolor}}>The word is: {props.numberorword}</h1>
            }
        </div>
    );
};

export default Combined;