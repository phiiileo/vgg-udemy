import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './all-videos.scss';
export default class AllVideos extends Component {
    render() {
        const videoData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        const videos = videoData.map((vid, index) => <VideoCard key={index} />);
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
                </div>
            </div>
        )
    }
}

AllVideos.defaultProps = {
    access: "student"
}