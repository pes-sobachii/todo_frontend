import React from 'react';
import styled from 'styled-components'

const StyledAlert = styled.div`
  max-width: 100%;
  padding: 20px 30px;
  background-color: #cc9c9c;
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  margin-top: 30px;
`
const ErrorAlert = ({children}) => {
    return (
        <StyledAlert>
            {children}
        </StyledAlert>
    );
};

export default ErrorAlert;