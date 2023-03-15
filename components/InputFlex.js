import React from 'react';
import styled from "styled-components";

const StyledFlex = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  @media (max-width: 700px) {
    width: 90%;
  }
`

const InputFlex = ({children}) => {
    return (
        <StyledFlex>
            {children}
        </StyledFlex>
    );
};

export default InputFlex;