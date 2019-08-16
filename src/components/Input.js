import styled from 'styled-components';

const TextInput = styled.input.attrs({
    type: 'text',
    size: props => (props.small ? 5 : 11),
})`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

export {TextInput};