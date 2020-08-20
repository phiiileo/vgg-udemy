import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import { Typography } from '@material-ui/core'
import CustomInput from '../../components/customComponents/CustomInput'
import CustomButton from '../../components/customComponents/CustomButton'

export default function UploadVideo() {

    const uploadFile = (file) => {
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
            // console.log(progress)
            // console.log(`Amount Uploaded: ${progressData.loaded}, Total Data: ${progressData.total}`);
        });

        http.onreadystatechange = (e) => {
            if (http.readyState === 4 && http.status === 200) {
                // File uploaded successfully
                var response = JSON.parse(http.responseText);
                console.log(e, response);
                this.setState({ imageUrl: response.secure_url });
                this.saveData(response);
            }
        };
        http.send(fd);


    }
    return (
        <DashboardLayout>
            <section>
                <Typography variant='h6'>Upload Video</Typography>
                <div>
                    <CustomInput type='file' label='' />
                    <CustomInput label='Title' />
                    <CustomInput label='Amount' />
                    <CustomButton variant='contained' color="primary" button_text='Upload' />
                </div>
            </section>
        </DashboardLayout>
    )
}
