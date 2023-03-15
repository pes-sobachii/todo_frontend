import React from 'react';
import FormTitle from "@/components/FormTitle";
import FormBlock from "@/components/FormBlock";
import InputGroup from "@/components/InputGroup";
import Input from "@/components/Input";
import Button from "@/components/FormButton";
import Container from "@/components/Container";
import useCreateUser from "@/services/hooks/postHooks/useCreateUser";
import Link from "next/link";
import ErrorAlert from "@/components/ErrorAlert";
import {useForm} from "react-hook-form";
import useAuthMe from "@/services/hooks/postHooks/useAuthMe";

const Register = () => {

    const {mutateAsync, isError} = useCreateUser()
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
        await mutateAsync(val)
    }

    return (
        <Container>
            <FormTitle>
                Register
            </FormTitle>
            <FormBlock>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <label htmlFor='login-name'>Nickname</label>
                        <Input type='text' error={Boolean(errors.nickname?.message)} {...register('nickname', {required: 'Create a nickname'})}
                               placeholder='Your nickname' id='login-name'/>
                    </InputGroup>
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
                            disabled={!isValid}
                    >Register</Button>
                </form>
                {isError && <ErrorAlert>
                    Too short password, name or the email is already in use
                </ErrorAlert>}
                <span>
                    Already have an account? <Link href="/login">Log in</Link>
                </span>
            </FormBlock>
        </Container>
    );
};

export default Register;