import React, {createRef, useState, useRef, useEffect} from "react";

function Button() {
    return (
        <button>test btn</button>
    );
}

function App() {
    const [renderIndex, setRenderIndex] = useState(1);
    const refFromUseRef = useRef();
    const refFromCreateRef = createRef();
    if (!refFromUseRef.current) {
        refFromUseRef.current = renderIndex;
    }
    if (!refFromCreateRef.current) {
        refFromCreateRef.current = renderIndex;
    }

    const btnRef = useRef();
    useEffect(() => {
        console.log(btnRef.current);
    });

    return (
        <div className="App">
            Current render index: {renderIndex}
            <br/>
            First render index remembered within refFromUseRef.current:
            {refFromUseRef.current}
            <br/>
            First render index unsuccessfully remembered within
            refFromCreateRef.current:
            {refFromCreateRef.current}
            <br/>
            <button onClick={() => setRenderIndex(prev => prev + 1)}>
                Cause re-render
            </button>
            <Button ref={btnRef}/>
        </div>
    );
}

export default App;