import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import { Typography } from '@material-ui/core'
import CustomInput from '../../components/customComponents/CustomInput'
import { useContext } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'
import CustomButton from '../../components/customComponents/CustomButton'
import axios from '../../axios/axios'

export default function Profile() {
    const { user, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        user[e.target.name] = e.target.value
    }
    const updateDetails = async (e) => {
        e.preventDefault()
        console.log(user.data)
        const updateUser = { ...user };
        delete updateUser.active_token;
        delete updateUser.videos;
        delete updateUser.email;
        console.log(updateUser) 
        const res = await axios.put(`/users/${user._id}`, updateUser)
        console.log(res)
        dispatch({
            type: "UPDATE_PROFILE",
            payload: res.data.data
        })
    }
    return (
        <DashboardLayout>
            {(user) ?
                <section>
                    <Typography variant="h5">Profile</Typography>
                    <div>
                        <form>
                            <CustomInput onChange={handleChange} name="first_name" label='First name' value={user.first_name} />
                            <CustomInput onChange={handleChange} name="last_name" label='Last name' value={user.last_name} />
                            <CustomInput onChange={handleChange} name="email" label='Email Address' value={user.email} disabled />
                            <CustomInput onChange={handleChange} name="role" label='Role' value={user.role} />
                            <CustomButton type='submit' onClick={updateDetails} button_text="Save" color="secondary" variant="outlined" />
                        </form>
                    </div>
                </section> :
                <Typography>Loading...</Typography>
            }
        </DashboardLayout>
    )
}
