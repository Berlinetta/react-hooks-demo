import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Link extends Component {
    render() {
        const {className, children} = this.props;
        return (
            <a className={className}>
                {children}
            </a>
        );
    }
}

Link.propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
};

const test = () => {
    const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

    render(
        <div>
            <Link>Unstyled, boring Link</Link>
            <br/>
            <StyledLink>Styled, exciting Link</StyledLink>
        </div>
    );
};

export default Link;
