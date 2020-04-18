import React, { Component } from 'react'
import './signin.scss'
export default class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <h1>Sign in here</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password"/>
                    </div>
                   <div className="btns">
                       <button type="submit">Login</button>
                       <button type="button">Login With Google</button>
                   </div>
                </form>
            </div>
        )
    }
}
