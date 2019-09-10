import React, {useEffect} from 'react';

export default (props) => {
    console.log("Number rendered..");

    useEffect(() => {
        console.log("Number useEffect executed..");
        if (props.onExecuted) {
            props.onExecuted(props.number);
            if (!window.fns) {
                window.fns = [];
            }
            window.fns.push(props.onExecuted);
        }
    }, [props.number]);

    return <span>{props.number}</span>;
};