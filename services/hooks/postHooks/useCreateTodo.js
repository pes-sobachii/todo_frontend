import { useMutation } from '@tanstack/react-query'
import { TodoService } from '../../todo.service'
import { useQueryClient } from '@tanstack/react-query'
import Router from "next/router";

const useCreateTodo = () => {
	const { setTodo } = TodoService
	const queryClient = useQueryClient()

	return useMutation(
		async (text) =>
			await setTodo(text),
		{
			onSuccess: ({ data }) => {
				console.log(data)
				queryClient.refetchQueries(['todos'])
			},
			onError: (res) => {
				console.log(res)
			},
		}
	)
}

export default useCreateTodo
