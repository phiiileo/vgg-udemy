import React, { Component } from 'react'
import './signin.scss';
import { GoogleLogin } from 'react-google-login'


export default class SignIn extends Component {
    responseGoogle = (res) => {
        console.log(res)
    }
    render() {
        return (
            <div className="sign-in">
                <form>
                    <h1>Sign in here</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="btns">
                        <button type="submit">Login</button>
                        <GoogleLogin
                            clientId="469983040665-j3v4v36rs2ndb6fs53hdv3joig8vdi25.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
