import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DashboardHeader from '../components/header/DashboardHeader';
import TutorSideBar from '../components/sideBar/TutorSideBar';

export default function DashboardLayout(props) {
    const useStyles = makeStyles((theme) => ({
        layout: {
            minHeight: "100vh"
        },
        header: {
            backgroundColor: theme.palette.grey[500],
            padding: "10px 20px",
            borderBottom: "2px solid " + theme.palette.grey[600],
        },
        body: {
            display: "flex",
            // border:"1px solid red"
        },
        sideBar: {
            // backgroundColor: theme.palette.grey[500],
            width: "200px",
            padding: "20px 10px",
            boxShadow: "2px -4px 5px grey"
        },
        main_content: {
            padding: "20px 10px",
            width: "90%",
            // border:"1px solid red"
        },
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
                <div className={classes.sideBar}>
                    <TutorSideBar />
                </div>
                <div className={classes.main_content}>
                    {props.children}
                </div>
            </section>
        </section>
    )
}
