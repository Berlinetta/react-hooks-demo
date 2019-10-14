//import React, {useRef} from 'react';
import React, { useState } from 'react';

function useRef(value = null) {
    const innerRef = React.createRef();
    innerRef.current = value;
    const [ref] = useState(innerRef);
    return ref;
}



//const inputEle = React.createRef("asdfsf");
//console.log(inputEle.current);




export default function YourFunctionComponent() {
    const inputEle = useRef(null);
    return (
        <div>
            <input ref={inputEle} type="text" />
            <button onClick={() => inputEle.current.focus()}>Focus The Input</button>
        </div>
    );
};




