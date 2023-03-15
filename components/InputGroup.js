import React from 'react';
import styled from 'styled-components'

const StyledInputGroup = styled.div`
  margin-bottom: 24px;
  text-align: left;
  label {
    display: inline-block;
    margin-bottom: 10px;
    color: darkgrey;
  }
`

const InputGroup = (props) => {
    return <StyledInputGroup {...props}/>
}

export default InputGroup