import React, { Component } from 'react'
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
                console.log(image.data)
                this.setState({ uploadedImgUrl: image.data.link })
            })
            .catch(err => console.log("error = " + err))
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.selectImage} />
                <img src={this.state.uploadedImgUrl} alt="" />
            </div>
        )
    }
}
