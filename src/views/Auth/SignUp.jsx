import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'
import OuterLayout from '../../Layout/OuterLayout'
import CustomButton from '../../components/customComponents/CustomButton'
import CustomInput from '../../components/customComponents/CustomInput'
import { Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import axios from '../../axios/axios'
import setAuthToken from '../../axios/setToken'
import SocialLogin from './SocialLogin'
import { useAuthStyles } from './AuthStyle'



export default function SignUp() {
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
            const loginDetails = await axios.post(`/auth/register`, {
                ...formValues
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
                        variant="h6">SIGN UP</Typography>

                    <SocialLogin />
                    <div style={{ margin: "20px 0", textAlign: "center" }}>OR</div>
                    <CustomInput
                        type="text"
                        required={true}
                        placeholder="Emmanuel"
                        label="First Name"
                        value="Emmanuel"
                        name="first_name"
                        fullWidth={true} />
                    <CustomInput
                        type="text"
                        required={true}
                        placeholder="Emmanuel"
                        label="Last Name"
                        value="Owo"
                        name="last_name"
                        fullWidth={true} />
                    <CustomInput
                        type="email"
                        required={true}
                        placeholder="emmanuel@gmail.com"
                        label="Email"
                        value="emmanuel@gmail.com"
                        name="email"
                        fullWidth={true} />
                    <CustomInput
                        type="text"
                        required={true}
                        placeholder="Tutor"
                        label="Role"
                        value="Tutor"
                        name="role"
                        fullWidth={true} />
                    <CustomInput
                        type="password"
                        required={true}
                        placeholder=""
                        label="Password"
                        value='111111'
                        name="password"
                        icon="show"
                        fullWidth />

                    <CustomButton
                        button_text="Sign up"
                        type='submit'
                        variant="contained"
                        fullWidth
                        style={{ boxShadow: "none", padding: "15px 30px" }}
                        color="primary" />
                    <Typography
                        className={classes.extra}
                        variant='caption'
                        color="primary">Do have an account ?
                        <Link to="/sign-in"> Sign in</Link>
                    </Typography>
                </form>
            </section>
        </OuterLayout>

    )
}
