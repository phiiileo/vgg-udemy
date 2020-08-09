import React, { Component } from 'react'
import './studentDashboard.scss'
import AllVideos from '../AllVideos/AllVideos'
export default class StudentDashboard extends Component {
    _isMounted = false

    componentDidMount() {
        this._isMounted = true
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        if (this._isMounted) {
            return (
                <div className="studentDashboard">
                    <AllVideos access="student" />
                </div>
            )
        }
        else {
            return <h1>Loading...</h1>
        }
    }
}
