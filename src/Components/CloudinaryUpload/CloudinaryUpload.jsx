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
        console.log(e.target.files[0])
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
                this.setState({ imageUrl: response.secure_url })
            }
        };
        http.send(fd);


    }
    render() {
        return (
            <div>
                <button style={this.props.buttonStyle} onClick={this.handleUploadCLick}>Upload New Video</button>
                <input style={{ display: "none" }} type="file" ref="newFile" onChange={this.getFiles} />
                {/* <iframe src="https://res.cloudinary.com/phiileo/video/upload/v1587576893/ao5tuex6k6jyvkiki6iq.mp4" frameborder="0" title="w"></iframe> */}
                {/* <Image cloudName="phiileo" publicId={this.state.imageUrl} width="300" crop="scale" /> */}
                {/* <Video cloudName="phiileo" publicId={this.state.imageUrl} width="300" crop="scale" /> */}
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