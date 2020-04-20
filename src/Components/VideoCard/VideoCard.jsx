import React, { Component } from 'react'
import './videoCard.scss'
export default class VideoCard extends Component {
    render() {
        const videoData = this.props.videoData;
        return (
            <div className="video">
                <iframe src={"https://www.youtube.com/embed/" + videoData.videoSrc} title={videoData.title}>
                </iframe>
                <p>Description: {videoData.title}
                    <span>{videoData.totalLikes}
                        <i className="fa fa-thumbs-up"
                            onClick={() => this.props.likeVideo(videoData.title)}
                            style={{ color: (videoData.liked) ? "skyblue" : "" }}>
                        </i>
                    </span></p>
            </div>
        )
    }
}
VideoCard.defaultProps = {
    videoData: {
        title: 'Video 1',
        videoSrc: "qugY8axtvWY",
        totalLikes: 0
    },
    likeVideo: (id) => { console.log("videoCard", id) }
}