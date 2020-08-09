import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'
import { makeStyles } from '@material-ui/core/styles'
import OuterLayout from '../Layout/OuterLayout'
import CustomButton from '../../components/customComponents/CustomButton'
import CustomInput from '../../components/customComponents/CustomInput'
export default function SignIn() {
    const useStyles = makeStyles((theme) => ({
        root: {
            padding: "20px",
            width: '90%',
            maxWidth: "500px",
            margin: "0 auto",
            minHeight: "90vh"
        }
    }))
    const classes = useStyles()

    const { user, dispatch } = useContext(AuthContext);

    const login = (event) => {
        console.log(event)
        event.preventDefault()
        const form = new FormData(event.target)
        console.log(form, event.target)
        for (let key of form) {
            console.log(key)
        }
        dispatch({
            type: "LOGIN",
            payload: { email: "emmanuel@gmail.com" }
        })
    }

    useEffect(() => {
        console.log(user)
    })

    return (
        <OuterLayout>
            <section className={classes.root}>
                <form action="" onSubmit={login}>
                    <CustomInput
                        type="email"
                        required="true"
                        placeholder="emmanuel@gmail.com"
                        label="Email"
                        fullWidth={true} />
                    <CustomInput
                        type="password"
                        required="true"
                        placeholder=""
                        label="Password"
                        fullWidth={true} />
                    <CustomButton
                        button_text="Login"
                        type='submit'
                        variant="outlined"
                        color="secondary" />
                </form>
            </section>
        </OuterLayout>

    )
}
