import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import dummyUser from '../../dummyUser.png';
import './home.scss';
import {Helmet} from 'react-helmet';



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: JSON.parse(localStorage.getItem("vgg-user"))
        }
    }
    resetLogin = () => {
        localStorage.setItem("vgg-user", null)
    }
    render() {
        console.log(this.state.userData)
        const data = this.state.userData
        if (this.state.userData.name === undefined) {
            return <Redirect to="/"></Redirect>
        } else {
            return (
                <div className="home">
                    <Helmet>
                        <title>User | Home</title>
                    </Helmet>
                    <nav>
                        <button onClick={this.resetLogin}>
                            <Link to="/">Logout</Link>
                        </button>
                        <p>This is just a test of Google sign in</p>
                    </nav>
                    <div className="image">
                        <img src={data.imageUrl || dummyUser} alt="User" />
                    </div>
                    <div className="details">
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                    </div>
                </div>
            )
        }

    }
}
