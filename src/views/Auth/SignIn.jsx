import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'
import { makeStyles } from '@material-ui/core/styles'
import OuterLayout from '../Layout/OuterLayout'
import CustomButton from '../../components/customComponents/CustomButton'
import CustomInput from '../../components/customComponents/CustomInput'
import CustomIcon from '../../components/icons/CustomIcon'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
export default function SignIn() {
    const useStyles = makeStyles((theme) => ({
        root: {
            padding: "20px",
            width: '90%',
            maxWidth: "500px",
            margin: "0 auto",
            minHeight: "90vh",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            "& form": {
                width: "100%",
                border: "1px solid " + theme.palette.primary.main,
                padding: theme.spacing(5, 2),
                [theme.breakpoints.up('sm')]: {
                    padding: theme.spacing(10, 5),
                },
                borderRadius: theme.spacing(1)
            }
        },
        title: {
            marginBottom: theme.spacing(5)
        },
        forget_password: {
            marginTop: theme.spacing(1)
        }
    }))
    const classes = useStyles()

    const { user, dispatch } = useContext(AuthContext);

    const login = (event) => {
        console.log(event)
        event.preventDefault()
        const form = new FormData(event.target)
        const formValues = {}
        for (let [name, value] of form) {
            formValues[name] = value
        }
        console.log(formValues)
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
                    <Typography
                        className={classes.title}
                        align="center"
                        color="primary"
                        variant="h6">LOGIN</Typography>
                    <CustomInput
                        type="email"
                        required={true}
                        placeholder="emmanuel@gmail.com"
                        label="Email"
                        name="email"
                        fullWidth={true} />
                    <CustomInput
                        type="password"
                        required={true}
                        placeholder=""
                        label="Password"
                        name="password"
                        icon="show"
                        fullWidth />

                    <CustomButton
                        button_text="Login"
                        type='submit'
                        variant="contained"
                        fullWidth
                        style={{ boxShadow: "none", padding: "15px 30px" }}
                        color="primary" />
                    <Typography
                        className={classes.forget_password}
                        align="right"
                        color="primary"
                    >Forget Password?</Typography>

                    <Typography
                        className={classes.extra}
                        variant='caption'
                        color="primary">Don't have an account ? 
                        <Link to="/"> Sign up</Link>
                        </Typography>
                </form>
            </section>
        </OuterLayout>

    )
}
