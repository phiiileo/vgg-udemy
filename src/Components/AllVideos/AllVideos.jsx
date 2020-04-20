import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './all-videos.scss';
import videoData from './videoData.json'
export default class AllVideos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoData: videoData
        }
    }

    likeVideo = (id) => {
        if (this.props.access !== "student") {
            return
        } else {
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

    }
    render() {
        const videos = this.state.videoData.map((vid, index) =>
            <VideoCard access={this.props.access} likeVideo={this.likeVideo} videoData={vid} key={index} />
        );
        let uploadButton;
        (this.props.access === "student") ? uploadButton = null : uploadButton = (<button>Upload A Video</button>);
        return (
            <div className="all-videos">
                <div className="btns">
                    {uploadButton}
                </div>
                <h3>All Videos</h3>
                <div className="all-videos-container">
                    {videos}
                    {(this.props.access === "student") ? null : videos}
                </div>
            </div>
        )
    }
}

AllVideos.defaultProps = {
    access: "student"
}