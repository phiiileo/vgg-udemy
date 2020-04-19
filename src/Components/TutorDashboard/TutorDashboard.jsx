import React, { Component } from 'react'
import SummaryCard from '../SummaryCard/SummaryCard'
import VideoCard from '../VideoCard/VideoCard'
import './tutordashboard.scss'
export default class TutorDashboard extends Component {
    render() {
        return (
            <div className="tutorDashboard">
                <SummaryCard />
                <SummaryCard />
                <SummaryCard />
                <VideoCard />
            </div>
        )
    }
}
