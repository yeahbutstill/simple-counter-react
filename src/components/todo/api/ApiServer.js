import axios from "axios";

export const apiServer = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)