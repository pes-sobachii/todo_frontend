import { useMutation } from '@tanstack/react-query'
import { TodoService } from '../../todo.service'
import { useQueryClient } from '@tanstack/react-query'

const useCompleteTodo = () => {
	const { completeTodo } = TodoService
	const queryClient = useQueryClient()

	return useMutation(
		({id, completed}) => completeTodo(id, completed),
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

export default useCompleteTodo
