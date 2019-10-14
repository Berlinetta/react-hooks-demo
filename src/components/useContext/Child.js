import React from 'react';
import { ConfigContext } from './Parent';

function Child() {
    return (
        <ConfigContext.Consumer>
            {value => <span>{value.text}</span>}
        </ConfigContext.Consumer>
    );
}

export default Child;




