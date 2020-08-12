import React from 'react'
import CustomIcon from '../../components/icons/CustomIcon'
import { makeStyles } from '@material-ui/core'

export default function SocialLogin() {
    const useStyles = makeStyles((theme) => ({
        socialLogin: {
            width: "180px",
            display: "flex",
            margin: "0 auto",
            justifyContent: "space-between",
            "& svg": {
                fontSize: "30px",
                cursor: "pointer",
                "&:hover": {
                    color: theme.palette.primary.main
                }
            }
        }
    }));
    const classes = useStyles()

    return (
        <div className={classes.socialLogin}>
            <CustomIcon name='google' />
            <CustomIcon name='facebook' />
            <CustomIcon name='twitter' />
        </div>
    )
}
