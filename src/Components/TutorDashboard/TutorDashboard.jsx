import React, { Component } from 'react'
import SummaryCard from '../SummaryCard/SummaryCard'
import VideoCard from '../VideoCard/VideoCard'
import './tutordashboard.scss'
export default class TutorDashboard extends Component {
    render() {
        const videoData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        const videos = videoData.map(vid => <VideoCard />)
        return (
            <div className="tutorDashboard">
                <div className="summary">
                    <SummaryCard icon="fa fa-youtube-play" title="Videos" value="45" />
                    <SummaryCard title="Your Rating" value="65%" />
                    <SummaryCard title="Followers" icon="fa fa-user" />
                </div>
                <div className="video-container">
                    {videos}
                </div>
            </div>
        )
    }
}
