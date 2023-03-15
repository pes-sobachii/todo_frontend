import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 16px;
  border:  ${({error}) => error ? '2px solid red' : '1px solid #e0e6e8'};
  border-radius: 4px;
  font-size: 1rem;
  color: #888888;
  transition: box-shadow 0.2s;
  &::placeholder {
    color: #dedede;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5);
  }
`

const Input = React.forwardRef((props, ref) => {
    return <StyledInput ref={ref} {...props}/>
})

export default Input