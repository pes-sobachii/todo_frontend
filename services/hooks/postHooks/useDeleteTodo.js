import { useMutation } from '@tanstack/react-query'
import { TodoService } from '../../todo.service'
import { useQueryClient } from '@tanstack/react-query'

const useDeleteTodo = () => {
	const { deleteTodo } = TodoService
	const queryClient = useQueryClient()

	return useMutation(
		(id) => deleteTodo(id),
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

export default useDeleteTodo
