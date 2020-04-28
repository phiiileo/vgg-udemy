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
            base_api: "",
            correlate: false,
            error: {}
        }
    }

    componentDidMount() {
        // Set Base Url for the Api call
        const test_base_api = "http://localhost:5000";
        const base_api = "https://phileo-api-v1.herokuapp.com" && false; //Remove && false when you go live
        const vgg_clone_api = base_api || test_base_api;
        this.setState({ base_api: vgg_clone_api })
        localStorage.setItem("vgg_base_api", JSON.stringify(vgg_clone_api));

        // Get Auth Details
        const getToken = localStorage.getItem("vgg-auth");
        if (getToken !== "null") {
            const UserData = JSON.parse(getToken)
            console.log("Existing Token", UserData);
            this.setState({ is_auth: true, current_auth_user: UserData })
        } else {
            console.log("No auth")
        }

        //Check if there is handled error from previous activities
        const vgg_error = localStorage.getItem("vgg-error");
        if (vgg_error !== "") {
            this.setState({ error: JSON.parse(vgg_error) })
        } else {
            // this.setState({ error: "" })
        }
    }


    responseGoogle = (res) => {
        localStorage.setItem("vgg-error", "")
        if (!res && this.state.activeCategory === "") { return } else {
            this.setState({ userData: res.profileObj });
            // localStorage.setItem("vgg-user", JSON.stringify(this.state.userData));
            const currentDate = new Date()
            const auth_user = {
                createdAt: currentDate.getTime(),
                expiryTime: currentDate.getTime() + (24 * 60 * 60 * 1000),
                token: res.accessToken,
                user_category: this.state.activeCategory,
                userData: this.state.userData
            }
            this.resolveLogin(auth_user)
            localStorage.setItem("vgg-auth", JSON.stringify(auth_user));
            // this.setState({ redirect: "/home-" + this.state.activeCategory })
        }
    }


    resolveLogin = (auth_user) => {
        console.log(auth_user)
        fetch(this.state.base_api + `/users?userData.email=${auth_user.userData.email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("vgg-error", "")
                if (data.length < 1) {
                    this.RegisterUser(auth_user)
                } else {
                    console.log("Existing User", data[0])
                    this.setState({ redirect: "/home-" + data[0].user_category })
                }
            })
            .catch(err => console.log(err))
    }


    RegisterUser = (RegDetails) => {
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(RegDetails)
        }

        fetch(this.state.base_api + "/users", config)
            .then(res => res.json())
            .then(data => {
                console.log("RegUser", data[0])
                this.setState({ redirect: "/home-" + data.user_category })
            })
    }


    setActiveCategory = (category) => {
        this.setState({ activeCategory: category })
        console.log("Cat", this.state.current_auth_user, this.state.is_auth)
        if (this.state.is_auth && this.state.current_auth_user.user_category === category && !this.state.error.status) {
            this.setState({ redirect: "/home-" + category });
            localStorage.setItem("vgg-error", "")
        } else {
            console.log("No user")
        }
    }

    componentWillUnmount() {
        localStorage.setItem("vgg-error", "")
    }
    render() {
        const errStyle = {
            color: "red",
            margin: "20px auto"
        }
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}></Redirect>
        }
        return (
            <div className="sign-in">
                <div className="container">
                    <Helmet>
                        <title>User | Sign</title>
                    </Helmet>
                    <form>
                        <img src={udemy_logo} alt="logo" />
                        <h1>Udemy Clone</h1>
                        <p className="alert">Note: First New Login doubles as a registration!</p>
                        <h3>Login As</h3>
                        {/* Category selector */}
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

                        {/* Google login Button */}
                        <div style={{ display: this.state.activeCategory === "" ? "none" : "block" }}>
                            <GoogleLogin
                                clientId="469983040665-j3v4v36rs2ndb6fs53hdv3joig8vdi25.apps.googleusercontent.com"
                                buttonText="Login With Google"
                                onSuccess={(res) => this.responseGoogle(res)}
                                onFailure={(res) => this.responseGoogle(res)}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>

                        <div style={errStyle}>{this.state.error.status ? this.state.error.errorText + "! Login again" : ""}</div>

                    </form>
                </div>
            </div>
        )
    }
}
