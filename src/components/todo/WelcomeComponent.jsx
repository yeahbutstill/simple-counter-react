import {Link, useParams} from "react-router-dom";
import {useState} from "react";
// eslint-disable-next-line no-unused-vars
import {retrieveHelloWorldPathVariable} from "./api/HelloWorldApiService";
import {useAuth} from "./security/AuthContext";

export default function WelcomeComponent() {

    const {username} = useParams()
    const [message, setMessage] = useState();
    const authContext = useAuth()

    function callHelloWorldRestApi() {
        console.log('called')

        retrieveHelloWorldPathVariable('yeahbutstill')
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
        setMessage(error.data.message)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello
                </button>
            </div>
            <div className="text-info">
                {message}
            </div>
        </div>
    )
}