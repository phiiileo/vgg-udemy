import React, { Component } from 'react'
import SummaryCard from '../SummaryCard/SummaryCard'
import VideoCard from '../VideoCard/VideoCard'
import './tutordashboard.scss';
export default class TutorDashboard extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            videoData: []
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const current_user = JSON.parse(localStorage.getItem("vgg-auth")).userData;
        if (this._isMounted) {
            fetch(`http://localhost:5000/videos?_sort=id&_order=desc&tutor=${current_user.email}`)
                .then(res => res.json())
                .then(raw => this.setState({ videoData: raw }))
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        const videos = this.state.videoData.map((vid, index) => <VideoCard likeVideo={this.likeVideo} videoData={vid} key={index} _id={vid.id} />)
        return (
            <div className="tutorDashboard">
                <div className="summary">
                    <SummaryCard icon="fa fa-youtube-play" color="green" title="Videos" value="45" />
                    <SummaryCard title="Your Rating" color="orange" value="65%" />
                    <SummaryCard title="Followers" color="darkcyan" icon="fa fa-user" />
                </div>
                <h3>My Videos</h3>
                <div className="video-container">
                    {videos}
                </div>
            </div>
        )
    }
}
