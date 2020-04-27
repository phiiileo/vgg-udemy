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
        const base_api = JSON.parse(localStorage.getItem("vgg_base_api"));
        if (this._isMounted) {
            fetch(`${base_api}/videos?_sort=id&_order=desc&tutor_email=${current_user.email}&_limit=0`)
                .then(res => res.json())
                .then(raw => this.setState({ videoData: raw }))
        }
    }
    getTotalLikes = () => {
        return this.state.videoData.reduce((total, curr) => {
            return total += curr.totalLikes.length
        }, 0);
    }
    getRatings = () => {
        const fullRating = this.state.videoData.length * 10;
        console.log(fullRating)
        const rating = Math.ceil((this.getTotalLikes() / fullRating) * 100)
        return (isNaN(rating)) ? 0 : rating
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        const followers = this.getTotalLikes()
        const rating = this.getRatings()
        console.log(followers)
        let videos = this.state.videoData.map((vid, index) => <VideoCard likeVideo={this.likeVideo} videoData={vid} key={index} _id={vid.id} />);
        let fallbackText;
        if (videos.length < 1) {
            fallbackText = <h3 style={{ textAlign: "left", color: "deepskyblue" }}>You have not uploaded a video yet. Go to All Videos to upload one...</h3>
        }
        return (
            <div className="tutorDashboard">
                <div className="summary">
                    <SummaryCard icon="youtube" fab="true" color="green" title="Videos" value={this.state.videoData.length} />
                    <SummaryCard title="Your Rating" color="orange" value={rating + "%"} />
                    <SummaryCard title="Total Likes" value={followers} color="red" icon="heart" />
                </div>
                <h3>My Videos</h3>
                {fallbackText}
                <div className="video-container">
                    {videos}
                </div>
            </div>
        )
    }
}
