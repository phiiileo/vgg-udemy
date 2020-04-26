import React, { Component } from 'react'
import './videoCard.scss'
export default class VideoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalLikes: this.props.videoData.totalLikes,
            totalStars: this.props.videoData.totalStars,
            user_email: JSON.parse(localStorage.getItem("vgg-auth")).userData.email
        }
    }

    likeVideo = (id, details) => {
        if (window.location.pathname !== "/home-student") { }
        else {
            this.toggleAction(id, details, "totalLikes")
        }
    }
    starVideo = (id, details) => {
        if (window.location.pathname !== "/home-student") { }
        else {
            this.toggleAction(id, details, "totalStars")
        }
    }

    toggleAction = (id, details, action) => {
        console.log("Default", details);
        console.log("default1", details[action])
        const email_position = details[action].indexOf(this.state.user_email)
        if (email_position < 0) {
            details[action] = [...details[action], this.state.user_email];
        } else {
            details[action].splice(email_position, 1);
            console.log("update", details[action])
            console.log("You already liked the video")
        }
        this.setState({ action: details[action] })
        console.log("state", this.state)

        const option = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(details)
        }
        fetch(`http://localhost:5000/videos/${id}`, option)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log("Error: Action not successful", err))
    }

    render() {
        let videoContainer;
        const liked = this.props.videoData.totalLikes.indexOf(this.state.user_email) < 0 ? false : true
        const starred = this.props.videoData.totalStars.indexOf(this.state.user_email) < 0 ? false : true

        // check if data exists
        if (this.props.videoData === undefined) { return (<h1>No data</h1>) }

        else {
            // Check if source is youtube if yes, use Iframe
            if (this.props.videoData.secure_url.indexOf("www.youtube.com") > 1 || this.props.videoData.secure_url.indexOf("res.cloudinary.com") > 1) {
                videoContainer = <iframe src={this.props.videoData.secure_url} title={this.props.videoData.name} frameBorder="0" allow="fullscreen"></iframe>
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
                        <span style={{ color: (liked) ? "skyblue" : "" }}>
                            {this.props.videoData.totalLikes.length}
                            <i className="fa fa-heart"
                                onClick={() => this.likeVideo(this.props._id, this.props.videoData)}
                            >
                            </i>
                        </span>
                        <span
                            className="star"
                            style={{ color: (starred) ? "skyblue" : "" }}>
                            {this.props.videoData.totalStars.length}
                            <i className="fa fa-star"
                                onClick={() => this.starVideo(this.props._id, this.props.videoData)}
                            >
                            </i>
                        </span>
                    </p>
                    <span>By: {this.props.videoData.tutor_name}</span>
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