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
        const response = {
            "public_id": "api_uploads/exrwng5tjj5g4qdo6thn",
            "version": 1587584823,
            "signature": "66ad6540140ec72f50ae9e06f5d44584fae90e3a",
            "width": 4160,
            "height": 3120,
            "format": "jpg",
            "resource_type": "image",
            "created_at": "2020-04-22T19:47:03Z",
            "tags": [
                "browser_upload"
            ],
            "bytes": 549884,
            "type": "upload",
            "etag": "a1443456fb0e910fe4bef99aa91eb43a",
            "placeholder": false,
            "link": "https://res.cloudinary.com/phiileo/image/upload/v1587584823/api_uploads/exrwng5tjj5g4qdo6thn.jpg",
            "url": "http://res.cloudinary.com/phiileo/image/upload/v1587584823/api_uploads/exrwng5tjj5g4qdo6thn.jpg",
            "secure_url": "https://res.cloudinary.com/phiileo/image/upload/v1587584823/api_uploads/exrwng5tjj5g4qdo6thn.jpg",
            "access_mode": "public",
            "original_filename": "IMG_20200417_121235_9",
            "totalLikes": []
        };
        console.log(e.target.files[0]);
        this.saveData(response)

        // this.uploadFile(e.target.files[0])
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
        videoDetails["data"].totalLikes = [];
        videoDetails["data"].name = data.original_name;

        console.log(data)
        const config = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(videoDetails)
        }
        // const saveResponse = "http://localhost:5000/videos"
        // fetch(saveResponse, config)
        //     .then(res => res.json())
        //     .then(rawData => console.log(rawData))
        //     .catch(err => console.log("Error", err))
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