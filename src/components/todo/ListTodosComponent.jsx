import {useEffect, useState} from "react";
import {deletedTodoApi, retrieveAllTodosForUsernameApi} from "./api/TodoApiService";
import {useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";

export function ListTodosComponent(){

    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()
    const [message, setMessage] = useState();
    const [todos, setTodos] = useState([])

    function successfulResponse(response) {
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        setMessage(error.data.message)
    }

    // useEffect - tell React that your component needs to do something after render
    useEffect(
        () => callTodoRestApi(), [callTodoRestApi]
    )

    function callTodoRestApi() {
        console.log('called')

        retrieveAllTodosForUsernameApi(username)
            .then((response) => {
                setTodos(response.data)
                successfulResponse(response)
            })
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function callDeletedTodoRestApi(id) {
        deletedTodoApi(username, id)
            .then(() => {
                // Display message
                setMessage(`Delete of todo with with ID: ${id} successfuly`)
                // Update Todo List
                callTodoRestApi()
            })
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function callUpdateTodoRestApi(id) {
        navigate(`/todo/${id}`)
    }

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Done?</th>
                        <th>Target</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => callDeletedTodoRestApi(todo.id)}>Delete</button>
                                        <button className="btn btn-primary" onClick={() => callUpdateTodoRestApi(todo.id)}>Update</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}