import React, { useContext } from 'react';
import { ConfigContext } from './Parent';

function Child() {
    const context = useContext(ConfigContext);
    return <span>{context.text}</span>;
}

export default Child;





