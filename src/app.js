import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {FriendStatus} from './components/index';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'consolas';
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`;

export const AContext = React.createContext("AAA");
export const BContext = React.createContext("BBB");
export const CContext = React.createContext("CCC");

class App extends Component {
    render() {
        const {store} = this.props;
        return (
            <div>
                <GlobalStyle/>
                <Provider store={store}>
                    <AContext.Provider value={{name: "A new"}}>
                        <FriendStatus/>
                    </AContext.Provider>
                </Provider>
            </div>
        );
    }
}

export default App;
