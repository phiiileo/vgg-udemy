import React, { Component } from 'react'
import './signin.scss';
import { GoogleLogin } from 'react-google-login'
import { Redirect } from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userData: {}
        }
    }
    responseGoogle = (res) => {
        console.log(res)
        if (res) { return } else {
            this.setState({ userData: res.profileObj });
            localStorage.setItem("vgg-user", JSON.stringify(this.state.userData))
            this.setState({ redirect: "/home" })
        }
    }
    login = (e) => {
        e.preventDefault()
        setTimeout(() => {
            const data = { name: "Test User",email:"testUser@test.com" }
            localStorage.setItem("vgg-user", JSON.stringify(data))
            this.setState({ redirect: "/home" })
        }, 1000);
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}></Redirect>
        }
        return (
            <div className="sign-in">
                 <Helmet>
                        <title>User | Sign</title>
                    </Helmet>
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
                        <button type="submit" onClick={this.login}>Login</button>
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
