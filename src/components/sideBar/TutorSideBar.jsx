import React from 'react'
import { Link } from 'react-router-dom'
import CustomIcon from '../icons/CustomIcon'
import { makeStyles } from '@material-ui/core'

export default function TutorSideBar() {
    const useStyles = makeStyles(theme => ({
        root: {
            // backgroundColor: theme.palette.primary.main
            "& a": {
                color: theme.palette.primary.main,
                "&:hover": {
                    color: theme.palette.primary.dark,
                    fontWeight:"500",
                    transition:"all .1s"
                }
            }
        }
    }));

    const classes = useStyles()
    return (
        <section className={classes.root}>
            <ul>
                <li>
                    <CustomIcon name='dashboard' />
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <CustomIcon name='live-tv' />
                    <Link to='/videos'>Videos</Link>
                </li>
                <li>
                    <CustomIcon name='live-tv' />
                    <Link to='/upload'>Add Video</Link>
                </li>
                <li>
                    <CustomIcon name='person-outline' />
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        </section>
    )
}
