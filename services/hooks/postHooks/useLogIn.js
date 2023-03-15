import { useMutation } from '@tanstack/react-query'
import { TodoService } from '../../todo.service'
import { useQueryClient } from '@tanstack/react-query'
import Router from "next/router";

const useCreateUser = () => {
	const { login } = TodoService

	return useMutation(
		async (userData) =>
			await login(userData),
		{
			onSuccess: ({ data }) => {
				console.log(data)
				window.localStorage.setItem('token', data.token)
				Router.push('/')
			},
			onError: (res) => {
				console.log(res)
			},
		}
	)
}

export default useCreateUser
