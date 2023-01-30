import {createContext, useContext, useState} from "react";

// create a context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

// share the created context with other component
export default function AuthProvider({children}) {

    // put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    function login(username, password) {
        if (username === 'yeahbutstill' && password === 'dummypassword') {
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}