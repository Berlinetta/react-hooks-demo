import React, {Component} from "react";
import {withTheme} from 'styled-components';

class Footer extends Component {
    render() {
        console.log(this.props.theme);
        return (
            <footer>-------------------------------------- this is footer</footer>
        );
    }
}

export default withTheme(Footer);
