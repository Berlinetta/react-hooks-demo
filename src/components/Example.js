import React, {useState, useEffect} from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("first effect.");
    });

    useEffect(() => {
        document.title = `You clicked ${count} timesAA`;
        console.log("second effect.");
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example;