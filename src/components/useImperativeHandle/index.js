import React, {useRef, useEffect, useImperativeHandle} from "react";

const usePublicMethods = function (com, methods) {
    return React.forwardRef((props, forwardedRef) => {
        useImperativeHandle(forwardedRef, () => methods);
        return com;
    });
};

// const Dummy = React.forwardRef((props, forwardedRef) => {
//     function show() {
//         console.log("ref in component", ref.current);
//     }
//
//     const ref = useRef();
//     useImperativeHandle(forwardedRef, () => ({
//         focus: () => {
//             ref.current.focus();
//         },
//         showA: show
//     }));
//     useEffect(() => {
//         console.log("ref in component", ref.current);
//     }, []);
//     return <div ref={ref} {...props} />;
// });

const Dummy = React.forwardRef((props, forwardedRef) => {
    function show() {
        console.log("ref in component", ref.current);
    }

    const ref = useRef();
    useImperativeHandle(forwardedRef, () => ({
        focus: () => {
            ref.current.focus();
        },
        showA: show
    }));
    useEffect(() => {
        console.log("ref in component", ref.current);
    }, []);
    return <div ref={ref} {...props} />;
});

function App() {
    const dummyRef = useRef();
    useEffect(() => {
        console.log("ref as object", dummyRef.current.showA());
    }, []);
    return (
        <>
            <Dummy ref={ref => console.log("ref as function", ref)}/>
            <Dummy ref={dummyRef}/>
        </>
    );
}

export default App;

