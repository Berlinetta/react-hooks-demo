import React, {useState, useEffect, useCallback} from 'react';
import Number from './Number';

function NumberOperator() {
    const [number, setNumber] = useState(0);
    const [flag, setFlag] = useState(true);
    console.log("NumberOperator rendered..");

    useEffect(() => {
        console.log("NumberOperator useEffect executed..");

        return () => {
            console.log("NumberOperator useEffect cleaned..");
        };
    }, [number]);

    const increaseNumber = () => {
        setNumber(number + 1);
    };

    const decreaseNumber = () => {
        setNumber(number - 1);
    };

    const noChangeNumber = () => {
        setFlag(!flag);
    };

    // const handleNumberExecuted = useCallback(() => {
    //     console.log("handleNumberExecuted");
    // }, []);
    const handleNumberExecuted = () => {
        console.log("handleNumberExecuted");
    };

    return (
        <div>
            <Number number={number} onExecuted={handleNumberExecuted}/>
            <div>
                <input type="button" value="increase" onClick={increaseNumber}/>
                <input type="button" value="decrease" onClick={decreaseNumber}/>
                <input type="button" value="no change" onClick={noChangeNumber}/>
            </div>
        </div>
    );
}

export default NumberOperator;