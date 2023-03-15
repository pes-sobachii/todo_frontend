import React from 'react';
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 30px 0;
`

const FormTitle = ({children}) => {
    return (
        <StyledH2>
            {children}
        </StyledH2>
    );
};

export default FormTitle;