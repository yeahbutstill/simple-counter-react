import {createContext, useContext, useState} from "react";
import {executeBasicAuthenticationService} from "../api/HelloWorldApiService";
import {apiServer} from "../api/ApiServer";

// create a context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

// share the created context with other component
export default function AuthProvider({children}) {

    // put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        try {
            const response = await executeBasicAuthenticationService(baToken)

            if (response.status===200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)

                apiServer.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = baToken
                        return config
                    }
                )

                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }

    }

    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}