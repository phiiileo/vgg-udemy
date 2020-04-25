import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './home.scss';
import Tutor from '../../Layout/Tutor';
import Student from '../../Layout/Student';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: JSON.parse(localStorage.getItem("vgg-user")),
            auth_user: JSON.parse(localStorage.getItem("vgg-auth")),
            path: "/not-found",
            redirect: false
        }
    }


    resetLogin = () => {
        localStorage.setItem("vgg-user", null)
        localStorage.setItem("vgg-auth", null)
    }

    componentDidMount() {
        const currentPath = window.location.pathname;
        const currentUser = this.state.auth_user;
        (currentPath === "/home-tutor" && currentUser.user_category === "tutor") ? this.setState({ path: "/home-tutor" })
            : (currentPath === "/home-student" && currentUser.user_category === "student") ? this.setState({ path: "/home-student" }) : this.setState({ redirect: true });
    }

    render() {
        // console.log(this.state.path, this.state.auth_user, this.state.userData)
        const data = this.state.auth_user
        if (this.state.userData === undefined || this.state.redirect) {
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
