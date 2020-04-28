import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './home.scss';
import Tutor from '../../Layout/Tutor';
import Student from '../../Layout/Student';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // userData: JSON.parse(localStorage.getItem("vgg-user")),
            auth_user: JSON.parse(localStorage.getItem("vgg-auth")),
            path: "/not-found",
            redirect: false,
            error: false
        }
    }


    resetLogin = () => {
        // localStorage.setItem("vgg-user", JSON.stringify({}))
        localStorage.setItem("vgg-auth", JSON.stringify({}))
    }

    componentDidMount() {
        const error = localStorage.getItem("vgg-error");
        if (error !== "") {
            this.setState({ error: true })
        } else {
            this.setState({ error: false })
            const currentPath = window.location.pathname;
            const currentUser = this.state.auth_user;
            // console.log(currentUser)
            if (currentPath === "/home-tutor" && currentUser.user_category === "tutor") {
                this.setState({ path: "/home-tutor" })
            }
            else if (currentPath === "/home-student" && currentUser.user_category === "student") { this.setState({ path: "/home-student" }) }
            else {
                console.log("User doesn't match");
                localStorage.setItem("vgg-error", JSON.stringify({ status: true, errorName: "wrong_route", errorText: `${currentUser.userData.email} is not registered as ${currentUser.user_category}` }))
                this.setState({ redirect: true });
            }
        }

    }

    render() {
        // console.log(this.state.path, this.state.auth_user, this.state.userData)
        if (this.state.error) {
            return <Redirect to="/"></Redirect>
        } else {
            const data = this.state.auth_user
            if (this.state.auth_user === undefined || this.state.redirect) {
                return <Redirect to="/"></Redirect>
            } else {
                if (this.state.path === "/home-tutor" && this.state.auth_user.user_category === "tutor") {
                    return <Tutor resetLogin={this.resetLogin} data={data} />
                } else {
                    return <Student resetLogin={this.resetLogin} data={data} />
                }
            }
        }
    }
}
