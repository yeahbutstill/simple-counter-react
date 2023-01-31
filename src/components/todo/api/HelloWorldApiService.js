import {apiServer} from "./ApiServer";

export const retrieveHelloWorldBean =
    () => apiServer.get('/api/v1/hello/hello-world-bean')

// Response tp preflight request doesn't pass access control check => Authorization header
export const retrieveHelloWorldPathVariable =
    (username) => apiServer.get(`/api/v1/hello/path-variable/${username}`)

export const executeBasicAuthenticationService =
    (token) => apiServer.get(`/api/v1/todo/basicauth`, {
        headers: {
            Authorization: token
        }
    })