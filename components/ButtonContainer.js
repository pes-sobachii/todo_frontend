import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  button {
    background-color: crimson;
  }
`
const ButtonContainer = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
};

export default ButtonContainer;