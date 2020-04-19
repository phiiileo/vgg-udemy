import React, { Component } from 'react'
import './studentDashboard.scss'
import AllVideos from '../AllVideos/AllVideos'
export default class StudentDashboard extends Component {
    render() {
        return (
            <div className="studentDashboard">
                <AllVideos access="student" />
            </div>
        )
    }
}
