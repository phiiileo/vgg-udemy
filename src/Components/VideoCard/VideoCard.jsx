import React, { Component } from 'react'
import './videoCard.scss'
export default class VideoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalLikes: this.props.videoData.totalLikes,
            user_email: JSON.parse(localStorage.getItem("vgg-user")).email
        }
    }

    likeVideo = (id, details) => {
        if (window.location.pathname !== "/home-student") { }
        else {
            console.log(details);
            console.log(details.totalLikes)
            const email_position = details.totalLikes.indexOf(this.state.user_email)
            if (email_position < 0) {
                details.totalLikes = [...details.totalLikes, this.state.user_email];
            } else {
                details.totalLikes.splice(email_position, 1);
                console.log(details.totalLikes)
                console.log("You already liked the video")
            }
            this.setState({ totalLikes: details.totalLikes })
            this.toggleLike(id, details)
        }
    }

    toggleLike = (id, details) => {
        const option = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id, data: details })
        }
        fetch(`http://localhost:5000/videos/${id}`, option)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log("Error: Action not successful", err))
    }

    render() {
        let videoContainer;
        const videoData = this.props.videoData;
        console.log(videoData);
        const liked = this.props.videoData.totalLikes.indexOf(this.state.user_email) < 0 ? false : true

        // check if data exists
        if (this.props.videoData === undefined) { return (<h1>No data</h1>) }

        else {
            // Check if source is youtube if yes, use Iframe
            if (this.props.videoData.secure_url.indexOf("www.youtube.com") > 1 || this.props.videoData.secure_url.indexOf("res.cloudinary.com") > 1) {
                videoContainer = <iframe src={this.props.videoData.secure_url} title={this.props.videoData.name}  frameBorder="0" allow="fullscreen"></iframe>
            } else {
                // otherwise use video tag
                videoContainer =
                    <video src={this.props.videoData.secure_url} controls>
                    </video>
            }


            return (
                <div className="video">
                    <div className="videoContainer">
                        {videoContainer}
                    </div>
                    <p>Description: {this.props.videoData.title}
                        <span style={{ color: (liked) ? "skyblue" : "" }}>{this.props.videoData.totalLikes.length}
                            <i className="fa fa-thumbs-up"
                                onClick={() => this.likeVideo(this.props._id, this.props.videoData)}
                            >
                            </i>
                        </span></p>
                </div>
            )
        }
    }
}
VideoCard.defaultProps = {
    videoData: {
        secure_url: "",
        name: "Upload a video"
    },
    likeVideo: (id) => { console.log("videoCard", id) }
}