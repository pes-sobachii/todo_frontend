import {useQuery} from '@tanstack/react-query'
import {TodoService} from '../../todo.service'
import Router from "next/router";

const useAuthMe = () => {
    const {authMe} = TodoService

    return useQuery({
        queryKey: ['auth'],
        queryFn: authMe,
        onSuccess: (data) => {
            console.log(data)
            Router.push('/')
        }
    })
}

export default useAuthMe
