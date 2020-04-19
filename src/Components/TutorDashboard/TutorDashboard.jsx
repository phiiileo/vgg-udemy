import React, { Component } from 'react'
import SummaryCard from '../SummaryCard/SummaryCard'
import VideoCard from '../VideoCard/VideoCard'
import './tutordashboard.scss'
export default class TutorDashboard extends Component {
    render() {
        const videoData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        const videos = videoData.map((vid, index) => <VideoCard key={index} />)
        return (
            <div className="tutorDashboard">
                <div className="summary">
                    <SummaryCard icon="fa fa-youtube-play" color="green" title="Videos" value="45" />
                    <SummaryCard title="Your Rating" color="orange" value="65%" />
                    <SummaryCard title="Followers" color="darkcyan" icon="fa fa-user" />
                </div>
                <h3>Recent Videos</h3>
                <div className="video-container">
                    {videos}
                </div>
            </div>
        )
    }
}
