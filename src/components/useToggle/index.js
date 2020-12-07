import React from "react";
import { useToggle } from "ahooks";

export default function YourFunctionComponent() {
    const [ state, { toggle } ] = useToggle();

    const onButtonClick = () => {
        toggle();
    };

    return (
        <div>
            <p>Current Boolean: {String(state)}</p>
            <p>
                <button onClick={onButtonClick}>Toggle</button>
            </p>
        </div>
    );
}








