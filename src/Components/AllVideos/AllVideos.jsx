import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './all-videos.scss';
export default class AllVideos extends Component {
    render() {
        const videoData = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        const videos = videoData.map((vid, index) => <VideoCard key={index} />)

        return (
            <div className="all-videos">
                <div className="btns">
                    <button>Upload A Video</button>
                </div>
                <h3>All Videos</h3>
                <div className="all-videos-container">
                    {videos}
                </div>
            </div>
        )
    }
}
