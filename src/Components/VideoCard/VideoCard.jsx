import React, { Component } from 'react'
import './videoCard.scss'
export default class VideoCard extends Component {
    render() {
        return (
            <div className="video">
                <iframe src="https://www.youtube.com/embed/qugY8axtvWY" title="c">
                </iframe>
                <p>Description: {this.props.title} <span>5<i className="fa fa-thumbs-up"></i></span></p>
            </div>
        )
    }
}
VideoCard.defaultProps = {
    title: 'Video 1'
}