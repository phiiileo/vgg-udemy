import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'
import OuterLayout from '../../Layout/OuterLayout'
import CustomButton from '../../components/customComponents/CustomButton'
import CustomInput from '../../components/customComponents/CustomInput'
import { Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import axios from '../../axios/axios'
import setAuthToken from '../../axios/setToken'
import { useAuthStyles } from './AuthStyle'



export default function ForgetPassword() {

    const classes = { ...useAuthStyles() }

    const history = useHistory()
    const { user, dispatch } = useContext(AuthContext);

    const login = async (event) => {
        event.preventDefault()

        const form = new FormData(event.target)
        const formValues = {}
        for (let [name, value] of form) {
            formValues[name] = value
        }
        console.log(formValues)
        try {
            const loginDetails = await axios.post(`/auth/login`, {
                email: formValues.email,
                password: formValues.password
            })
            console.log(loginDetails.data.data)
            setAuthToken(loginDetails.data.data.active_token)
            dispatch({
                type: "LOGIN",
                payload: loginDetails.data
            })
        }
        catch (err) {
            console.log(err.response)
        }
    }

    useEffect(() => {
        console.log(user)
        if (user.isLogin) {
            history.push('/dashboard')
        }
    })

    return (
        <OuterLayout>
            <section className={classes.root}>
                <form action="" onSubmit={login}>
                    <Typography
                        className={classes.title}
                        align="center"
                        color="primary"
                        variant="h6">Reset password</Typography>
                    <CustomInput
                        type="email"
                        required={true}
                        placeholder="emmanuel@gmail.com"
                        label="Email"
                        value="johndoe2@gmail.com"
                        name="email"
                        fullWidth={true} />
                    <CustomButton
                        button_text="Get Link"
                        type='submit'
                        variant="contained"
                        fullWidth
                        style={{ boxShadow: "none", padding: "15px 30px" }}
                        color="primary" />
                    <p className={classes.forget_password}
                    >
                        <Link
                            className={classes.forget_password}
                            align="right"
                            color="primary"
                            to="/sign-in"
                        >Sign in?
                    </Link>
                    </p>
                </form>
            </section>
        </OuterLayout>

    )
}
