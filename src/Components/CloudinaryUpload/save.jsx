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
        const new_file = this.refs.incomingFile;
        new_file.click()
        console.log(new_file)
    }

    // Get files
    getFiles = (event) => {
        const file = event.target.files[0];
        this.uploadFile(file)
    }

    uploadFile = (file) => {
        var url = `https://api.cloudinary.com/v1_1/${this.state.cloudName}/upload`;
        var http = new XMLHttpRequest();
        var FormFileData = new FormData();
        http.open('POST', url, true);
        http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        FormFileData.append('upload_preset', this.state.unsignedUploadPreset);
        FormFileData.append('tags', 'browser_upload');
        FormFileData.append('file', file);
        http.send(FormFileData);

        // Get Upload progress
        http.upload.addEventListener("progress", (UploadProgress) => {
            var progress = Math.round((UploadProgress.loaded * 100) / UploadProgress.total);
            console.log(progress + "%");
            console.log(UploadProgress)
        });

        //Request Response
        http.onreadystatechange = (e) => {
            if (http.readyState === 4 && http.status === 200) {
                // File uploaded successfully
                var response = JSON.parse(http.responseText);
                console.log(response);
                console.log(e);
                this.setState({ imageUrl: response.secure_url })
                this.saveData(this.response)

            }
        };

    }

    saveData = (data) => {
        const config = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }
        const saveResponse = "localhost:5000/video"
        fetch(saveResponse, config)
            .then(res => res.json())
            .then(rawData => console.log(rawData))
    }
    render() {
        return (
            <div>
                <button style={this.props.buttonStyle} onClick={this.handleUploadCLick}>Upload New Video</button>
                <input type="file" accept="video/*" ref="incomingFile" onChange={this.uploadFile} style={{ display: "none" }} />
                {/* <iframe src="https://res.cloudinary.com/phiileo/video/upload/v1587576893/ao5tuex6k6jyvkiki6iq.mp4" frameBorder="0" title="w"></iframe> */}
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