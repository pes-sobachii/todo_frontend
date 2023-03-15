import React from 'react';
import Container from "@/components/Container";
import FormTitle from "@/components/FormTitle";
import FormBlock from "@/components/FormBlock";
import InputGroup from "@/components/InputGroup";
import Input from "@/components/Input";
import Button from "@/components/FormButton";
import useLogIn from "@/services/hooks/postHooks/useLogIn";
import Link from "next/link";
import ErrorAlert from "@/components/ErrorAlert";
import {useForm} from "react-hook-form";
import Router from "next/router";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {TodoService} from "@/services/todo.service";
import useAuthMe from "@/services/hooks/postHooks/useAuthMe";

const Login = () => {

    const {mutateAsync, isError} = useLogIn()
    useAuthMe()

    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
    } = useForm({
        defaultValues: {email: '', password: '', nickname: ''},
        mode: 'onChange',
    })

    const onSubmit = async (val) => {
        console.log(val)
        await mutateAsync(val)
    }

    return (
        <Container>
            <FormTitle>
                Log in
            </FormTitle>
            <FormBlock>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <label htmlFor='login-email'>Email</label>
                        <Input error={Boolean(errors.email?.message)} {...register('email', {
                            required: 'Provide an email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'invalid email address',
                            },
                        })} type='text' placeholder='Your email' id='login-email'/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor='login-password'>Password</label>
                        <Input error={Boolean(errors.password?.message)}
                               {...register('password', {required: 'Create a password'})}
                               type='password'
                               id='login-password' placeholder='Your password'/>
                    </InputGroup>
                    <Button type='submit'
                            disabled={!isValid}>Log in</Button>
                </form>
                {isError && <ErrorAlert>
                    Too short password, name or the email is already in use
                </ErrorAlert>}
                <span>
                    Don't have an account? <Link href="/register">Sign up</Link>
                </span>
            </FormBlock>
        </Container>
    );
};

export default Login;