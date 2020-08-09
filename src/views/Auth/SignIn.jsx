import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'
import { makeStyles } from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
export default function SignIn() {
    const useStyles = makeStyles((theme) => ({
        root: {
            // backgroundColor: "grey",
            // padding:"20px"
        }
    }))
    const classes = useStyles()

    const { user, dispatch } = useContext(AuthContext);

    const login = (event) => {
        console.log(event)
        event.preventDefault()
        dispatch({
            type: "LOGIN",
            payload: { email: "emmanuel@gmail.com" }
        })
    }

    useEffect(() => {
        console.log(user)
    })

    return (
        <section className={classes.root}>
            <form action="" onSubmit={login}>
                <input type="text" />
                <Button type='submit' variant="contained" color="secondary">Button</Button>
            </form>
        </section>
    )
}
