import React from 'react';

const NumberWord = (props) => {
    let num = true;
    if (isNaN(+props.numberorword)) {
        num = false;
    }
    return (
        <div>
            {
                num ? <h1>The number is: {props.numberorword}</h1> : 
                <h1>The word is: {props.numberorword}</h1>
            }
        </div>
    );
};

export default NumberWord;