import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import { Typography } from '@material-ui/core'
import CustomInput from '../../components/customComponents/CustomInput'
import { useContext } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'
import CustomButton from '../../components/customComponents/CustomButton'

export default function Profile() {
    const { user, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        user.data[e.target.name] = e.target.value
    }
    const updateDetails = () => {
        console.log(user.data)
    }
    return (
        <DashboardLayout>
            {(user.data) ?
                <section>
                    <Typography variant="h5">Profile</Typography>
                    <div>
                        <CustomInput onChange={handleChange} name="name" label='First name' value={user.data.first_name} />
                        <CustomInput onChange={handleChange} name="name" label='Last name' value={user.data.last_name} />
                        <CustomInput onChange={handleChange} name="email" label='Email Address' value={user.data.email} disabled />
                        <CustomInput onChange={handleChange} name="role" label='Role' value={user.data.role} />
                        <CustomButton onClick={updateDetails} button_text="Save" color="secondary" variant="outlined" />
                    </div>
                </section> :
                <Typography>Loading...</Typography>
            }
        </DashboardLayout>
    )
}
