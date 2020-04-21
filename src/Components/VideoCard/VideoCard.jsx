import React, { Component } from 'react'
import './videoCard.scss'
export default class VideoCard extends Component {


    render() {
        let videoContainer;
        const videoData = this.props.videoData;
        console.log(videoData)

        // check if data exists
        if (this.props.videoData === undefined) { return (<h1>No data</h1>) }

        else {
            // Check if source is youtube if yes, use Iframe
            if (this.props.videoData.link.indexOf("www.youtube.com") > 1) {
                videoContainer = <iframe src={this.props.videoData.link} title={this.props.videoData.name}></iframe>
            } else {
                // otherwise use video tag
                videoContainer =
                    <video src={this.props.videoData.link} controls>
                    </video>
            }


            return (
                <div className="video">
                    <div className="videoContainer">
                        {videoContainer}
                    </div>
                    <p>Description: {this.props.videoData.title}
                        <span>{this.props.videoData.totalLikes.length}
                            <i className="fa fa-thumbs-up"
                                onClick={() => this.props.likeVideo(this.props.videoData.title)}
                                style={{ color: (this.props.videoData.liked) ? "skyblue" : "" }}>
                            </i>
                        </span></p>
                </div>
            )
        }
    }
}
VideoCard.defaultProps = {
    videoData: {
            link:"",
            name:"Upload a video"
    },
    likeVideo: (id) => { console.log("videoCard", id) }
}