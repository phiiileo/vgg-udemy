import React from 'react'
import {
    makeStyles
} from "@material-ui/core";

export const useAuthStyles = makeStyles((theme) => ({
    root: {
        padding: "20px",
        width: '90%',
        maxWidth: "500px",
        margin: "0 auto",
        minHeight: "80vh",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        "& form": {
            width: "100%",
            border: "1px solid " + theme.palette.primary.main,
            padding: theme.spacing(5, 2),
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(8, 5, 10, 5),
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