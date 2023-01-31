import {apiServer} from "./ApiServer";

// Response tp preflight request doesn't pass access control check => Authorization header
export const retrieveHelloWorldPathVariable =
    (username) => apiServer.get(`/api/v1/hello-world/say-path-variable/${username}`)