import React from 'react'
import OuterHeader from '../../components/header/OuterHeader'
import OuterFooter from '../../components/footer/OuterFooter'
import { makeStyles } from '@material-ui/core/styles'

export default function OuterLayout(props) {
    const useStyles = makeStyles(() => ({
        layout: {
            border: "1px solid red",
            minHeight: "100vh"
        },
        header: {
            border: "1px solid green"
        },
        body: {},
        footer: {
            border: "1px solid green"
        }
    }));
    const classes = useStyles()
    return (
        <section className={classes.layout} >
            <section className={classes.header}>
                <OuterHeader />
            </section>
            <section className={classes.body}>
                {props.children}
            </section>
            <section className={classes.footer}>
                <OuterFooter />
            </section>
        </section>
    )
}
