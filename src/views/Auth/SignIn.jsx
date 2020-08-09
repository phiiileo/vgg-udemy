import React, { useContext, useEffect, useCallback } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'

export default function SignIn() {
    const { user, dispatch } = useContext(AuthContext);

    const login = useCallback(() => {
        dispatch({
            type: "LOGIN",
            payload: { email: "emmanuel@gmail.com" }
        })
    }, [dispatch])

    useEffect(() => {
        console.log(user)
    })

    return (
        <div>
            Sign in Page
            <p>Sign in: {`${user.isLogin}`}</p>
            <p>Signed in user: {user.email}</p>
            <button onClick={login}>Click</button>
        </div>
    )
}
