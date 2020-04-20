import React, { Component } from 'react';
import videoData from '../AllVideos/videoData.json'



export default class ImgUr extends Component {

    // Handle file selection
    selectImage = (e) => {
        const videoFile = (e.target.files[0])
        this.uploadVideo(videoFile)
    }

    // Upload Image
    uploadVideo = (videoData) => {
        console.log(videoData)
        const tokenPass = "e33e63643fb6e64";
        const postData = new FormData();
        postData.append("video", videoData)
        postData.append("name", videoData.name)


        // Request Configuration
        const config = {
            method: "POST",
            headers: {
                "Authorization": "Client-ID " + tokenPass
            },
            body: postData
        }

        fetch("https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/upload", config)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    this.saveUploadResponse("videos", data);
                } else {
                    console.log("Something Went wrong uploading data")
                }
            })
            .catch(err => console.log("error = " + err))
    }

    // Save Response to Local db.json
    saveUploadResponse = (type, imgData) => {
        const option = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(imgData)
        }
        fetch(`http://localhost:5000/${type}`, option)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log("Posting Image Error", err))
    }

    // Handle File upload
    handleSubmit = () => {
        const fileInput = this.refs.fileInput;
        videoData.push({ s: 2 })
        console.log(videoData);
        fetch(`http://localhost:5000/`).then(res => res.json()).then(data => console.log(data))

        fileInput.click();
    }

    // Render App
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
