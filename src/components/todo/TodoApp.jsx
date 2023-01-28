import './TodoApp.css'
import {BrowserRouter, Route, Routes, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='/todos' element={<ListTodosComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('yeahbutstill')
    const [password, setPassword] = useState('dummypassword')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePassswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === 'yeahbutstill' && password === 'dummypassword') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed, please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePassswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {

    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working reall hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const todos = [
        {id: 1, description: 'Learn AWS', username: 'yeahbutstill'},
        {id: 2, description: 'Learn Vault', username: 'yeahbutstill'},
        {id: 3, description: 'Learn Keycloak', username: 'yeahbutstill'},
        {id: 4, description: 'Learn Docker', username: 'yeahbutstill'}
    ]

    return (
        <div className="ListTodosComponent">
            <h1>Things you want to do!</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>username</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.username}</td>
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