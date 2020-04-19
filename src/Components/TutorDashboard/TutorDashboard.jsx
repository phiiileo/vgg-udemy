import React, { Component } from 'react'
import SummaryCard from '../SummaryCard/SummaryCard'
import VideoCard from '../VideoCard/VideoCard'

export default class TutorDashboard extends Component {
    render() {
        return (
            <div>
                <SummaryCard />
                <VideoCard />
            </div>
        )
    }
}
