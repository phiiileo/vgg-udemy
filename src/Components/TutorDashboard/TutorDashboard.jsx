import React, { Component } from 'react'
import SummaryCard from '../SummaryCard/SummaryCard'
import VideoCard from '../VideoCard/VideoCard'
import './tutordashboard.scss';
import Loader from '../Loader/Loader';
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
            fetch(`${base_api}/videos?_sort=id&_order=desc&tutor=${current_user.email}`)
                .then(res => res.json())
                .then(raw => {
                    const test = JSON.stringify(raw)
                    return test !== `{}` ? this.setState({ videoData: raw }) : null
                })
                .catch(err => console.log(err))
        }
    }
    getTotalLikes = () => {
        return this.state.videoData.reduce((total, curr) => {
            return total += curr.totalLikes.length
        }, 0);
    }
    getRatings = () => {
        const fullRating = this.state.videoData.length * 10;
        // console.log(fullRating)
        const rating = Math.ceil((this.getTotalLikes() / fullRating) * 100)
        return (isNaN(rating)) ? 0 : rating
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        const followers = this.getTotalLikes()
        const rating = this.getRatings()
        // console.log(followers)
        let videos = this.state.videoData.map((vid, index) => <VideoCard likeVideo={this.likeVideo} videoData={vid} key={index} _id={vid.id} />);
        let fallbackText;
        if (videos.length < 1) {
            fallbackText =
                <Loader title="Videos" color="deepskyblue" error="You have not uploaded a video yet. Go to All Videos to upload one..." />
            // <h3 style={{ textAlign: "left", color: "deepskyblue" }}>You have not uploaded a video yet. Go to All Videos to upload one...</h3>
        }
        return (
            <div className="tutorDashboard">
                <div className="summary">
                    <SummaryCard icon="youtube" fab="true" color="green" title="Videos" value={this.state.videoData.length} />
                    <SummaryCard title="Your Rating" color="orange" value={rating + "%"} icon="chart-line" />
                    <SummaryCard title="Total Likes" value={followers} color="red" icon="heart" />
                </div>
                <h3>My Videos ({this.state.videoData.length})</h3>
                {fallbackText}
                <div className="video-container">
                    {videos}
                </div>
            </div>
        )
    }
}
