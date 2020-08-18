import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import { Typography } from '@material-ui/core'
import CustomInput from '../../components/customComponents/CustomInput'
import CustomButton from '../../components/customComponents/CustomButton'

export default function UploadVideo() {
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
