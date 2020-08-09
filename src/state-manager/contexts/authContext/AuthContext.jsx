import React, { createContext, useReducer } from 'react';
import AuthReducer from '../../AuthReducer';


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, dispatch] = useReducer(AuthReducer, {
        email: "",
        isLogin: false
    })

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider