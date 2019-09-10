import React from 'react';
import {Button} from '../../Button';

// function Example() {
//     const handleClick = () => {
//         console.log('Clicked.');
//     };
//     return <Button onClick={handleClick}>Click Me</Button>;
// }

function Example() {
    const memoizedHandleClick = useCallback(
        () => console.log('Clicked.'), [],
    );
    return <Button onClick={memoizedHandleClick}>Click Me</Button>;
}

export {Example};