import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DashboardHeader from '../components/header/DashboardHeader';

export default function DashboardLayout(props) {
    const useStyles = makeStyles(() => ({
        layout: {
            minHeight: "100vh"
        },
        header: {
        },
        body: {},
        footer: {
        }
    }));
    const classes = useStyles()
    return (
        <section className={classes.layout} >
            <section className={classes.header}>
                <DashboardHeader />
            </section>
            <section className={classes.body}>
                {props.children}
            </section>
        </section>
    )
}
