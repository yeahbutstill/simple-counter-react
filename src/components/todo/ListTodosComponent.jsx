import {useParams} from "react-router-dom";

export function ListTodosComponent(){

    const {username} = useParams()
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const todos = [
        {id: 1, description: 'Learn AWS', username:username, done: false, targetDate:targetDate},
        {id: 2, description: 'Learn Vault', username:username, done: false, targetDate:targetDate},
        {id: 3, description: 'Learn Keycloak', username:username, done: true, targetDate:targetDate},
        {id: 4, description: 'Learn Docker', username:username, done: true, targetDate:targetDate}
    ]

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>is done?</td>
                        <td>target</td>
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
                                    <td>{todo.targetDate.toDateString()}</td>
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