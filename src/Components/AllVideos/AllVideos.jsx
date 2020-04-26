import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './all-videos.scss';
// import videoData from './videoData.json'
import CloudinaryUpload from '../CloudinaryUpload/CloudinaryUpload';


export default class AllVideos extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            videoData: []
        }
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            fetch("http://localhost:5000/videos?_sort=id&_order=desc&_limit=3")
                .then(res => res.json())
                .then(raw => this.setState({ videoData: raw }))
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        const videos = this.state.videoData.map((vid) => <VideoCard videoData={vid} key={vid.id} _id={vid.id} />)

        let uploadButton;
        (this.props.access === "student") ? uploadButton = null : uploadButton = (<CloudinaryUpload />);
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