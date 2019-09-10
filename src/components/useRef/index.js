//import React, {useRef} from 'react';
import React, {useState} from 'react';

function useRef(value = null) {
    const innerRef = React.createRef();
    innerRef.current = value;
    const [ref] = useState(innerRef);
    return ref;
}

export default () => {
    //var myRef = React.createRef("asdfsf");
    //console.log(myRef.current);
    const inputEle = useRef(null);//why not React.createRef()?
    const myff = useRef("sdsdfsdf");//why not React.createRef()?

    const onButtonClick = () => {
        inputEle.current.focus();
    };

    return (
        <div>
            <input ref={inputEle} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
};

// export default () => {
//     const inputEle = useRef(null);
//
//     const onButtonClick = () => {
//         inputEle.current.focus();
//     };
//
//     return (
//         <div>
//             <input ref={inputEle} type="text"/>
//             <button onClick={onButtonClick}>Focus the input</button>
//         </div>
//     );
// };