import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './all-videos.scss';
// import videoData from './videoData.json'
import ImgUr from '../ImgurUpload/ImgUr';
export default class AllVideos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoData: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:5000/videos")
            .then(res => res.json())
            .then(raw => this.setState({ videoData: raw }))
    }

    componentWillMount() {

    }

    render() {
        const videos = this.state.videoData.map((vid, index) => <VideoCard videoData={vid.data} key={vid.id} _id={vid.id} />)

        let uploadButton;
        (this.props.access === "student") ? uploadButton = null : uploadButton = (<ImgUr />);
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