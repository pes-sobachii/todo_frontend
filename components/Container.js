import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
`

const Container = ({children, ...props}) => {
    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    );
};

export default Container;