import React, { Component } from 'react'
import './videoCard.scss'
export default class VideoCard extends Component {
    render() {
        return (
            <div className="video">
                <iframe src="https://www.youtube.com/embed/qugY8axtvWY" frameborder="0">
                </iframe>
                <p>Title: {this.props.title}</p>
            </div>
        )
    }
}
VideoCard.defaultProps = {
    title: 'Video 1'
}