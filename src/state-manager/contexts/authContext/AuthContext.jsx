import React, { createContext, useReducer } from 'react';
import AuthReducer from '../../AuthReducer';


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    // check if user is login on device
    let current_user = localStorage.class_user;
    if (current_user) {
        current_user = JSON.parse(current_user);
        current_user.isLogin = true
    } else {
        current_user = {
            isLogin: false
        }
    }
    const [user, dispatch] = useReducer(AuthReducer, {
        ...current_user
    })

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider