import React, {useState} from 'react';
import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/FormButton";
import InputFlex from "@/components/InputFlex";
import FormBlock from "@/components/FormBlock";
import TodoCard from "@/components/TodoCard";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {TodoService} from "@/services/todo.service";
import useCreateTodo from "@/services/hooks/postHooks/useCreateTodo";
import Router from "next/router";
import useCompleteTodo from "@/services/hooks/postHooks/useCompleteTodo";
import useDeleteTodo from "@/services/hooks/postHooks/useDeleteTodo";
import ButtonContainer from "@/components/ButtonContainer";
import useGetTodos from "@/services/hooks/postHooks/useGetTodos";

const Index = () => {

    const [inputState, setInputState] = useState('')
    const {data} = useGetTodos()
    const {mutateAsync: createTodo} = useCreateTodo()
    const {mutateAsync: completeTodo} = useCompleteTodo()
    const {mutateAsync: deleteTodo} = useDeleteTodo()

    const onLogOut = () => {
        window.localStorage.setItem('token', '')
        Router.push('/login')
    }

    if (!data) {
        return <>Loading...</>
    }

    return (
        <Container>
            <InputFlex>
                <Input value={inputState} onChange={(e) => setInputState(e.target.value)}/>
                <Button onClick={() => {
                    setInputState('')
                    return createTodo(inputState)
                }}>
                    Add
                </Button>
            </InputFlex>
            <FormBlock>
                {data.data.length === 0 ? 'There are no tasks' :
                    data.data.map(todo => {
                        return <TodoCard key={todo.todo_id} completed={!!todo.completed} completeTodo={() => completeTodo({id: todo.todo_id, completed: !todo.completed})} deleteTodo={() => deleteTodo(todo.todo_id)}>
                            {todo.todo_value}
                        </TodoCard>
                    })
                }
            </FormBlock>
            <ButtonContainer>
                <Button onClick={onLogOut}>Log Out</Button>
            </ButtonContainer>
        </Container>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['todos'], () => TodoService.getTodos())

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}


export default Index;