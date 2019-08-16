import React, {Component} from "react";
import {connect} from "react-redux";
import styled, {ThemeProvider, ThemeConsumer} from 'styled-components';
//import {AContext} from "../app.js";
import Footer from './Footer';
import {decreaseCounter, increaseCounter} from "../actions/home";
import {testPrint} from '../utils/index';
import Link from './Link';
import {Button, TomatoButton} from './Button';
import {TextInput} from './Input';

import './Home.less';

const StyledLink = styled(Link)`
  color: ${props => props.theme.providerColor};
  font-weight: bold;
`;

class HomeApp extends Component {
    render() {
        const {counter, increaseCounter, decreaseCounter} = this.props;
        return (
            <ThemeProvider theme={{providerColor: 'mediumseagreen'}}>
                <section>
                    <h2 className="title">Counter: {counter}</h2>
                    <div>
                        <button onClick={increaseCounter}>Increase</button>
                        &nbsp;&nbsp;
                        <button onClick={decreaseCounter}>Decrease</button>
                    </div>
                    <br/>
                    <p>{testPrint()}</p>
                    <StyledLink><span>Should be mediumseagreen</span></StyledLink>
                    <Button>normal btn</Button>
                    <Button primary>primary btn</Button>
                    <TomatoButton whiteColor>tomato btn</TomatoButton>
                    <TextInput/>
                    <ThemeConsumer>
                        {theme => <div>The theme 'providerColor' is {theme.providerColor}.</div>}
                    </ThemeConsumer>
                    <Footer theme={{providerColor: 'instantTheme'}}/>
                </section>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.home.counter
});

const mapDispatchToProps = {
    increaseCounter,
    decreaseCounter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeApp);
