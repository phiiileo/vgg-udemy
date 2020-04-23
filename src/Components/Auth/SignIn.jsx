import React, { Component } from 'react'
import './signin.scss';
import { GoogleLogin } from 'react-google-login'
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import udemy_logo from '../../udemy_logo.png';



export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userData: {},
            activeCategory: "",
            is_auth: false,
            current_auth_user: "",
        }
    }

    componentDidMount() {

        // Set Base Url for the Api call
        const test_base_api = "http://localhost:5000";
        const base_api = null;
        const vgg_clone_api = base_api || test_base_api;
        localStorage.setItem("vgg_base_api", JSON.stringify(vgg_clone_api));
        console.log(localStorage["vgg_base_api"])

        // Get Auth Details
        const getToken = localStorage.getItem("vgg-auth");
        console.log(getToken)
        if (getToken !== "null") {
            const token = JSON.parse(getToken)
            console.log("Existing Token", token);
            this.setState({ is_auth: true, current_auth_user: token.user })
        } else {
            console.log("No auth")
        }
    }

    responseGoogle = (res) => {
        if (!res && this.state.activeCategory === "") { return } else {
            this.setState({ userData: res.profileObj });
            localStorage.setItem("vgg-user", JSON.stringify(this.state.userData));
            const currentDate = new Date()
            const createToken = {
                createdAT: currentDate.getTime(),
                expiryTime: currentDate.getTime() + (24 * 60 * 60 * 1000),
                token: res.accessToken,
                auth: "_phileo",
                user: this.state.activeCategory
            }
            localStorage.setItem("vgg-auth", JSON.stringify(createToken));
            this.setState({ redirect: "/home-" + this.state.activeCategory })
        }
    }

    setActiveCategory = (category) => {
        this.setState({ activeCategory: category })
        if (this.state.is_auth && this.state.current_auth_user === category) {
            this.setState({ redirect: "/home-" + category })
        } else {
            console.log(this.state.activeCategory)
        }

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
                    <img src={udemy_logo} alt="logo" />
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
