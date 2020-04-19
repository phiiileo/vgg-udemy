import React, { Component } from 'react'
import './signin.scss';
import { GoogleLogin } from 'react-google-login'
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import udemy_logo from '../../udemy_logo.png'

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userData: {},
            activeCategory: ""
        }
    }
    responseGoogle = (res) => {
        if (!res && this.state.activeCategory === "") { return } else {
            this.setState({ userData: res.profileObj });
            localStorage.setItem("vgg-user", JSON.stringify(this.state.userData))
            this.setState({ redirect: "/home-" + this.state.activeCategory })
        }
    }

    setActiveCategory = (category) => {
        this.setState({ activeCategory: category })
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
                    <img src={udemy_logo} alt="logo"/>
                <h1>Vgg-Udemy Clone</h1>
                    <h3>Are you</h3>
                    <div className="category">
                        <button
                            type="button"
                            onClick={() => { this.setActiveCategory("student") }}
                            className={this.state.activeCategory === "student" ? "active" : null}>
                           A Student
                            </button>
                        <span>OR</span>
                        <button type="button"
                            onClick={() => { this.setActiveCategory("tutor") }}
                            className={this.state.activeCategory === "tutor" ? "active" : null}>
                            A Tutor
                                </button>
                    </div>
                    <div style={{ display: this.state.activeCategory === "" ? "none" : "block" }}>
                        <GoogleLogin
                            clientId="469983040665-j3v4v36rs2ndb6fs53hdv3joig8vdi25.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            onSuccess={(res) => this.responseGoogle(res)}
                            onFailure={(res) => this.responseGoogle(res)}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>

                </form>
            </div>
        )
    }
}
