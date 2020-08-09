import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export default function OuterFooter() {
    const useStyles = makeStyles(() => ({
        footer: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: 'center'
        }
    }));
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <Typography> &copy; super class 2020</Typography>
        </div>
    )
}
