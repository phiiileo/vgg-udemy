import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../Components/SideBar/Sidebar'
import Header from '../Components/Header/Header'
import './student.scss'
export default class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRoute: "dashboard"
        }
    }

    changeRoute = (route) => {
        this.setState({ activeRoute: route })
    }
    render() {
        const data = this.props.data
        return (
            <div className="tutor">
                <Helmet>
                    <title>Tutor | Home</title>
                </Helmet>
                <Sidebar changeRoute={this.changeRoute} title="Tutor" data={data} />
                <div className="student-main">
                    <Header data={data.email} />
                </div>
            </div>
        )
    }
}
