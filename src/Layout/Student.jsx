import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../Components/SideBar/Sidebar';
import Header from '../Components/Header/Header';
import './student.scss'
import StudentDashboard from '../Components/StudentDashboard/StudentDashboard';
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
                <Sidebar changeRoute={this.changeRoute} title="Student" data={data.userData} />
                <div className="student-main">
                    <Header email={data.userData.email} />
                    <StudentDashboard />
                </div>
            </div>
        )
    }
}
