import {apiServer} from "./ApiServer";

export const retrieveAllTodosForUsernameApi =
    (username) => apiServer.get(`/api/v1/todo/users/${username}/todos`)

export const deletedTodoApi =
    (username, id) => apiServer.delete(`/api/v1/todo/users/${username}/todos/${id}`)

export const retrieveTodoApi =
    (username, id) => apiServer.get(`/api/v1/todo/users/${username}/todos/${id}`)

export const updateTodoApi =
    (username, id, todo) => apiServer.put(`/api/v1/todo/users/${username}/todos/${id}`, todo)

export const createTodoApi =
    (username, todo) => apiServer.post(`/api/v1/todo/users/${username}/todos`, todo)
