import React from 'react';
import ReactDOM from 'react-dom';

import {configureStore} from './store/configure-store';
import App from './app.js';

const store = configureStore();

const render = (appCom) => {
    ReactDOM.render(
        <div id="main-content">
            {appCom}
        </div>,
        document.getElementById('app')
    );
};

render(<App store={store}/>);

if (module.hot) {
    module.hot.accept("./app.js", () => {
        const NextApp = require('./app.js').default;
        render(<NextApp store={store}/>);
    });
}
