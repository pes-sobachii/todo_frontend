import React from 'react';
import styled from "styled-components";
import {MdDeleteForever, MdCheck} from "react-icons/md";

const StyledCard = styled.div`
  width: 100%;
  background-color: #7896ce;
  margin: 20px 0;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  p {
    flex: 1 1 auto;
    text-align: left;
    text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};
  }

  button {
    margin-left: 10px;
  }

  opacity: ${({completed}) => completed ? '0.5' : '1'};
`

const TodoCard = ({children, ...props}) => {
    return (
        <StyledCard {...props}>
            <p>
                {children}
            </p>
            <button onClick={props.deleteTodo}><MdDeleteForever/></button>
            <button onClick={props.completeTodo}><MdCheck/></button>
        </StyledCard>
    );
};

export default TodoCard;