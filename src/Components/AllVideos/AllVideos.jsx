import React, { Component } from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './all-videos.scss';
import CloudinaryUpload from '../CloudinaryUpload/CloudinaryUpload';
import VideoFilter from './VideoFilter';
import Loader from '../Loader/Loader';


export default class AllVideos extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            videoData: [],
            base_api_url: ""
        }
    }
    componentDidMount() {
        this._isMounted = true;
        const base_url = JSON.parse(localStorage.getItem("vgg_base_api"));
        if (base_url) {
            this.setState({ base_api_url: base_url })
        }

        if (this._isMounted && base_url) {
            fetch(`${base_url}/videos?_sort=id&_order=desc&_limit`)
                .then(res => res.json())
                .then(raw => this.setState({ videoData: raw }))
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }
    searchValue = (value) => {
        if (value === "") { return }
        else {
            this.fetchVideo()
                .then(data => {
                    const vid = data.filter(video => {
                        return (video.title.toLowerCase().indexOf(value.toLowerCase())) >= 0 || (video.tutor_name.toLowerCase().indexOf(value.toLowerCase())) >= 0
                    })
                    this.setState({ videoData: vid })
                })
        }
    }

    filterValue = (value) => {
        const current_user = JSON.parse(localStorage.getItem("vgg-auth"));
        let filterParam;
        if (value === "0") {
            this.fetchVideo()
                .then(data => this.setState({ videoData: data }))
            return
        }
        else if (value === "liked") {
            filterParam = "totalLikes"
        } else if (value === "starred") {
            filterParam = "totalStars"
        }
        this.fetchVideo()
            .then(data => {
                const vid = data.filter(video => {
                    return video[filterParam].indexOf(current_user.userData.email) >= 0
                })
                this.setState({ videoData: vid })
            })
    }

    fetchVideo = async () => {
        try {
            const res = await fetch(`${this.state.base_api_url}/videos`);
            return await res.json(res);
        }
        catch (err) {
            return err;
        }
    }

    render() {
        const videos = this.state.videoData.map((vid) => <VideoCard videoData={vid} key={vid.id} _id={vid.id} />)

        let barContent;
        (this.props.access === "student") ?
            barContent = (
                <VideoFilter filter={this.filterValue} search={this.searchValue} />
            ) :
            barContent = (<CloudinaryUpload />);
        return (
            <div className="all-videos">
                <div className="btns">
                    {barContent}
                </div>
                <h3>All Videos ({this.state.videoData.length})</h3>

                <hr />

                {
                    (this.state.videoData.length > 0) ?
                        <div className="all-videos-container">
                            {videos}
                        </div> :
                        <Loader title="Videos" error="No Videos to show" color="deepskyblue" />
                }
            </div>
        )
    }
}

AllVideos.defaultProps = {
    access: "student"
}