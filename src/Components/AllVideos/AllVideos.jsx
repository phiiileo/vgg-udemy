import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './all-videos.scss';
// import videoData from './videoData.json'
import CloudinaryUpload from '../CloudinaryUpload/CloudinaryUpload';
import VideoFilter from './VideoFilter';


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
            fetch("http://localhost:5000/videos?_sort=id&_order=desc&_limit=6")
                .then(res => res.json())
                .then(raw => this.setState({ videoData: raw }))
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }
    filterValue = (value) => {
        const base_url = JSON.parse(localStorage.getItem("vgg_base_api"));
        fetch(base_url + "/videos")
            .then(res => res.json(res))
            .then(rawData => {
                const vid = rawData.filter(video => {
                    return (video.title.toLowerCase().indexOf(value.toLowerCase())) >= 0 || (video.tutor_name.toLowerCase().indexOf(value.toLowerCase())) >= 0
                })
                console.log(vid)
                this.setState({ videoData: vid })
            }
            )
            .catch(err => { console.log("Error", err) })
        console.log("search", value)
    }

    render() {
        const videos = this.state.videoData.map((vid) => <VideoCard videoData={vid} key={vid.id} _id={vid.id} />)

        let barContent;
        (this.props.access === "student") ? barContent = (<VideoFilter filter={this.filterValue} />) : barContent = (<CloudinaryUpload />);
        return (
            <div className="all-videos">
                <div className="btns">
                    {barContent}
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