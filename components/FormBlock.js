import React from 'react';
import styled from 'styled-components'

const StyledFormBlock = styled.div`
  width: 50%;
  padding: 30px 40px;
  background-color: whitesmoke;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  span {
    display: inline-block;
    margin-top: 30px;
    a {
      color: deepskyblue;
    }
  }
  @media (max-width: 700px) {
    width: 90%;
    span {
      font-size: 0.8rem;
    }
  }
`

const FormBlock = ({children}) => {
    return (
        <StyledFormBlock>
            {children}
        </StyledFormBlock>
    );
};

export default FormBlock;