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
            redirect: false
        }
    }


    resetLogin = () => {
        // localStorage.setItem("vgg-user", JSON.stringify({}))
        localStorage.setItem("vgg-auth", JSON.stringify({}))
    }

    componentDidMount() {
        const currentPath = window.location.pathname;
        const currentUser = this.state.auth_user;
        if (currentPath === "/home-tutor" && currentUser.user_category === "tutor") {
            this.setState({ path: "/home-tutor" })
        }
        else if (currentPath === "/home-student" && currentUser.user_category === "student") { this.setState({ path: "/home-student" }) }
        else {
            this.setState({ redirect: true });
            console.log("User doesn't match");
            localStorage.setItem("vgg-error", JSON.stringify({ status: true, errorName: "wrong_route", errorText: `You are not registered as ${currentUser.user_category}` }))
        }
    }

    render() {
        // console.log(this.state.path, this.state.auth_user, this.state.userData)
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
