import {apiServer} from "./ApiServer";

export const executeBasicAuthenticationService =
    (token) => apiServer.get(`/api/v1/todo/basicauth`, {
        headers: {
            Authorization: token
        }
    })

export const executeJwtAuthenticationService =
    (username, password) => apiServer.post(`/authenticate`, {username, password})