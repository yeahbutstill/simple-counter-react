import axios from "axios";

const apiServer = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const retrieveHelloWorldBean =
    () => apiServer.get('/api/v1/hello/hello-world-bean')

export const retrieveHelloWorldPathVariable =
    (username) => apiServer.get(`/api/v1/hello/path-variable/${username}`)