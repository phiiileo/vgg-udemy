import React, { useEffect } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import { Typography } from '@material-ui/core'
import CustomInput from '../../components/customComponents/CustomInput'
import CustomButton from '../../components/customComponents/CustomButton'
import { useState } from 'react'
import axios from '../../axios/axios'

export default function UploadVideo() {
    const [cloudinaryConfig] = useState({
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
        unsignedUploadPreset: process.env.REACT_APP_CLOUDINARY_UNSIGNEDUPLOADPRESET,
        uploadProgress: 0,
        progressBar: "none",
        base_url: ""
    })
    const [file, setFile] = useState()
    const [progress, setProgress] = useState(0)
    const [videoInfo, setVideoInfo] = useState({
        title: "",
        amount: ""
    })

    const handleInputChange = (e) => {
        setVideoInfo({
            ...videoInfo, [e.target.name]: e.target.value
        })
    }
    const getFiles = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0]
        setFile(file)
    }
    const uploadFile = (file) => {
        console.log(file)
        var url = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`;
        var http = new XMLHttpRequest();
        var fd = new FormData();

        fd.append('upload_preset', cloudinaryConfig.unsignedUploadPreset);
        fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
        fd.append('file', file);
        http.open('POST', url, true);
        http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // Update progress (can be used to show progress indicator)
        http.upload.addEventListener("progress", (progressData) => {
            var progress = Math.round((progressData.loaded * 100) / progressData.total);
            setProgress(progress)
            // console.log(`Amount Uploaded: ${progressData.loaded}, Total Data: ${progressData.total}`);
        });

        http.onreadystatechange = (e) => {
            if (http.readyState === 4 && http.status === 200) {
                // File uploaded successfully
                var response = JSON.parse(http.responseText);
                console.log(e, response);
                saveFileToDb(response)
            }
        };
        http.send(fd);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file, videoInfo)
        if (file) {
            uploadFile(file)
        }
    }

    const saveFileToDb = async (videoData) => {
        const payload = {
            title: videoInfo.title,
            amount: videoInfo.amount,
            url: videoData.secure_url,
            cloud_signature: videoData.signature,
            meta: JSON.stringify(videoData)
        }

        const res = await axios.post('/videos', payload);
        console.log(res.data)
    }

    useEffect(() => {
        console.log(progress)
    })
    return (
        <DashboardLayout>
            <section>
                <Typography variant='h6'>Upload Video</Typography>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <CustomInput type='file' label='' onChange={getFiles} />
                        <CustomInput value={""} onChange={handleInputChange} name="title" label='Title' />
                        <CustomInput label='Amount' onChange={handleInputChange} name="amount" />
                        <CustomButton type='submit' variant='contained' color="primary" button_text='Upload' />
                    </form>
                </div>
            </section>
        </DashboardLayout>
    )
}
