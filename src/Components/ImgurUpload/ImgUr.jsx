import React, { Component } from 'react';
import videoData from '../AllVideos/videoData.json'
// import axios from 'axios'
export default class ImgUr extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadedImgUrl: ""
        }
    }
    selectImage = (e) => {
        const image = (e.target.files[0])
        this.uploadImg(image)
    }

    uploadImg = (image) => {
        console.log(image)
        const tokenPass = "e33e63643fb6e64";
        // const imgRequest = new XMLHttpRequest()
        const imageData = new FormData();
        // const data = []
        const config = {
            method: "POST",
            headers: {
                "Authorization": "Client-ID " + tokenPass
            },
            body: imageData
        }
        imageData.append("image", image)
        imageData.append("name", "my Image")
        fetch("https://api.imgur.com/3/image", config)
            .then(res => res.json())
            .then(image => {
                window.location.reload()
                console.log(image.data, videoData)
            })
            .catch(err => console.log("error = " + err))
    }

    handleSubmit = () => {
        const fileInput = this.refs.fileInput;
        videoData.push({ s: 2 })
        console.log(videoData);
        fileInput.click();
    }
    render() {
        const style = {
            display: "none"
        }
        return (
            <div>
                <input style={style} type="file" ref="fileInput" onChange={this.selectImage} />
                <button onClick={this.handleSubmit}>Upload a Video</button>
            </div>
        )
    }
}
