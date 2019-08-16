import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

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

const Button = styled.button`
  color: red;
`;

test('it works', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
});