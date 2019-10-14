import React from 'react';
import Child from './Child';

export const ConfigContext = React.createContext();

function Parent() {
    return (
        <ConfigContext.Provider value={{ text: "mytext" }}>
            <Child />
        </ConfigContext.Provider>
    );
}

export default Parent;






