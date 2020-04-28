import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CloudinaryUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cloudName: "phiileo",
            unsignedUploadPreset: "dvjugjo8",
            url: "",
            uploadProgress: 0,
            progressBar: "none"
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
        this.setState({ progressBar: "block" })
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
            this.setState({ uploadProgress: progress })
            console.log(progress)
            // console.log(`Amount Uploaded: ${progressData.loaded}, Total Data: ${progressData.total}`);
        });

        http.onreadystatechange = (e) => {
            if (http.readyState === 4 && http.status === 200) {
                // File uploaded successfully
                var response = JSON.parse(http.responseText);
                console.log(e, response);
                this.setState({ imageUrl: response.secure_url });
                this.saveData(response);
                window.location.reload()
            }
        };
        http.send(fd);


    }
    saveData = (data) => {
        const tutor = JSON.parse(localStorage.getItem("vgg-auth"))
        const videoDetails = data
        videoDetails.totalLikes = [];
        videoDetails.totalStars = [];
        videoDetails.title = data.original_filename;
        videoDetails.tutor = tutor.userData.email;
        videoDetails.tutor_name = tutor.userData.name
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
        const Style = {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 6,
            backgroundColor: "whitesmoke",
            width: "100%",
            height: "5px",
            display: this.state.progressBar
        }

        const ProgressStyle = {
            backgroundColor: "green",
            width: this.state.uploadProgress + "%",
            height: "100%"
        }
        return (
            <div>
                <div className="loader" style={Style}>
                    <div className="progress" style={ProgressStyle}></div>
                    <div className="roller"></div>
                </div>
                <button style={this.props.buttonStyle} onClick={this.handleUploadCLick}  >
                    <i style={{ marginRight: "20px", fontSize: "18px" }}><FontAwesomeIcon icon={"cloud-upload-alt"} /></i>
                   New Video
                </button>
                <input style={{ display: "none" }} type="file" ref="newFile" onChange={this.getFiles} accept="video/*" />
            </div>
        )
    }
}
CloudinaryUpload.defaultProps = {
    buttonStyle: {
        backgroundColor: "skyblue",
        color: "white",
        fontSize: "20px",
        padding: "15px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        outline: "none"
    }
}