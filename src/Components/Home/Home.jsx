import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
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
    }

    componentDidMount() {
        const currentPath = window.location.pathname;

        (currentPath === "/home-tutor") ? this.setState({ path: "/home-tutor" })
            : (currentPath === "/home-student") ? this.setState({ path: "/home-student" }) : this.setState({ redirect: true })
    }

    render() {
        const data = this.state.userData
        if (this.state.userData.name === undefined || this.state.redirect) {
            return <Redirect to="/"></Redirect>
        } else {
            if (this.state.path === "/home-tutor" && this.state.auth_user.user === "tutor") {
                return <Tutor resetLogin={this.resetLogin} data={data} />
            } else {
                return <Student resetLogin={this.resetLogin} data={data} />
            }

        }
    }
}
