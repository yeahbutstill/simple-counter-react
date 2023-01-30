import axios from "axios";

const apiServer = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const retrieveAllTodosForUsernameApi =
    (username) => apiServer.get(`/api/v1/todo/users/${username}/todos`)

export const deletedTodoApi =
    (username, id) => apiServer.delete(`/api/v1/todo/users/${username}/todos/${id}`)

export const retrieveTodoApi =
    (username, id) => apiServer.get(`/api/v1/todo/users/${username}/todos/${id}`)

export const updateTodoApi =
    (username, id, todo) => apiServer.put(`/api/v1/todo/users/${username}/todos/${id}`, todo)