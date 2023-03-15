import axios from './axios'

export const TodoService = {
	async authMe() {
		return await axios.get(`/auth/me`)
	},
	async setTodo(text) {
		return await axios.post(`/todo`, {
			text
		})
	},
	async getTodos() {
		return await axios.get(`/todos`)
	},
	async completeTodo(id, completed) {
		return await axios.put(`/todos/${id}`, {
			completed
		})
	},
	async deleteTodo(id) {
		return await axios.delete(`/todos/${id}`)
	},
	async setUser(data) {
		return await axios.post(`/users`, data)
	},
	async login(data) {
		return await axios.post(`/login`, data)
	},
}
