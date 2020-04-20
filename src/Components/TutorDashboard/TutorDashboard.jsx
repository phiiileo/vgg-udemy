import React, { Component } from 'react'
import SummaryCard from '../SummaryCard/SummaryCard'
import VideoCard from '../VideoCard/VideoCard'
import './tutordashboard.scss';
import videoData from '../AllVideos/videoData.json'
export default class TutorDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoData: videoData
        }
    }

    likeVideo = (id) => {
        this.setState({
            videoData: this.state.videoData.filter(vid => {
                if (vid.title === id) {
                    vid.liked = !vid.liked;
                    (vid.liked) ? vid.totalLikes++ : vid.totalLikes--
                }
                return vid
            })
        })
    }
    render() {
        const videos = this.state.videoData.map((vid, index) => <VideoCard likeVideo={this.likeVideo} videoData={vid} key={index} />)
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
