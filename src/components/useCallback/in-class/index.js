import React from 'react';
import {Button} from '../../Button';

class Example extends Component {
    handleClick() {
        console.log('Clicked');
    }

    render() {
        return <Button onClick={() => this.handleClick()}>Click Me</Button>;
    }
}

export {Example};