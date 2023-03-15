import {useQuery} from '@tanstack/react-query'
import {TodoService} from '../../todo.service'
import Router from "next/router";

const useGetTodos = () => {
    const {getTodos} = TodoService

    return useQuery(['todos'], () => getTodos(), {onError: () => Router.push('/login'), retry: false})
}

export default useGetTodos
