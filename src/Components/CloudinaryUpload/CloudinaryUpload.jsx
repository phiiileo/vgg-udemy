import React, { Component } from 'react';

export default class CloudinaryUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cloudName: "phiileo",
            unsignedUploadPreset: "dvjugjo8",
            url: ""
        }
    }

    handleUploadCLick = () => {
        const inputFile = this.refs.newFile;
        inputFile.click();
        console.log("Input click")
    }

    getFiles = (e) => {
        console.log(e.target.files[0]);
        this.uploadFile(e.target.files[0])
    }
    uploadFile = (file) => {
        console.log(file)
        var url = `https://api.cloudinary.com/v1_1/${this.state.cloudName}/upload`;
        var http = new XMLHttpRequest();
        var fd = new FormData();

        fd.append('upload_preset', this.state.unsignedUploadPreset);
        fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
        fd.append('file', file);
        http.open('POST', url, true);
        http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // Update progress (can be used to show progress indicator)
        http.upload.addEventListener("progress", (progressData) => {
            var progress = Math.round((progressData.loaded * 100.0) / progressData.total);
            console.log(progress, progressData)
            console.log(`Amount Uploaded: ${progressData.loaded}, Total Data: ${progressData.total}`);
        });

        http.onreadystatechange = (e) => {
            if (http.readyState === 4 && http.status === 200) {
                // File uploaded successfully
                var response = JSON.parse(http.responseText);
                console.log(e, response);
                this.setState({ imageUrl: response.secure_url });
                this.saveData(response)
            }
        };
        http.send(fd);


    }
    saveData = (data) => {
        const videoDetails = data
        videoDetails.totalLikes = [];
        videoDetails.title = data.original_filename;
        console.log(data)
        const config = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(videoDetails)
        }
        const saveResponse = "http://localhost:5000/videos"
        fetch(saveResponse, config)
            .then(res => res.json())
            .then(rawData => console.log(rawData))
            .catch(err => console.log("Error", err))
    }
    render() {
        return (
            <div>
                <button style={this.props.buttonStyle} onClick={this.handleUploadCLick}>Upload New Video</button>
                <input style={{ display: "none" }} type="file" ref="newFile" onChange={this.getFiles} />
            </div>
        )
    }
}
CloudinaryUpload.defaultProps = {
    buttonStyle: {
        backgroundColor: "rgb(16, 171, 233)",
        color: "white",
        fontSize: "20px",
        padding: "15px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        outline: "none"
    }
}