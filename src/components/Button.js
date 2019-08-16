/* @flow */
import styled, {css} from 'styled-components'

const complexMixin = css`
  color: ${props => (props.whiteColor ? 'white' : 'black')};
`;

const Button = styled.button`
  color: ${props => props.primary ? 'red' : 'green'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// We're extending Button with some extra styles
const TomatoButton = styled(Button)`
  ${complexMixin}
  border-color: tomato;
`;

export {Button, TomatoButton};