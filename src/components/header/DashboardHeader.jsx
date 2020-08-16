import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CustomIcon from '../icons/CustomIcon'
import { makeStyles, Typography } from '@material-ui/core'
import { useContext } from 'react'
import { AuthContext } from '../../state-manager/contexts/authContext/AuthContext'

export default function DashboardHeader() {
    const useStyles = makeStyles(theme => ({
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            "& aside a": {
                fontSize: "30px",
                color: "white"
            },
            "& div": {
                color: "white",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                "& svg": {
                    color: "white",
                    "&:hover": {
                        color: 'red'
                    }
                }
            }
        }
    }))
    const classes = useStyles();
    const history = useHistory()
    const { user, dispatch } = useContext(AuthContext)
    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
        history.push('/sign-in')
    }
    console.log(user)
    return (
        <header className={classes.header}>
            <aside>
                <Link to='/dashboard'>U-Phileo</Link>
            </aside>
            <div>
                <Typography>{user.data ? user.data.first_name : null}</Typography>
                <CustomIcon onClick={logout} color='default' name="logout" />
            </div>
        </header>
    )
}
