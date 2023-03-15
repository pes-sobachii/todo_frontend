import { useMutation } from '@tanstack/react-query'
import { TodoService } from '../../todo.service'
import { useQueryClient } from '@tanstack/react-query'
import Router from "next/router";

const useCreateUser = () => {
	const { setUser } = TodoService

	return useMutation(
		async (userData) =>
			await setUser(userData),
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
