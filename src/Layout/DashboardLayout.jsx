import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router';
import DashboardHeader from '../components/header/DashboardHeader';
import TutorSideBar from '../components/sideBar/TutorSideBar';
import { AuthContext } from '../state-manager/contexts/authContext/AuthContext';
import bgImage from './../assets/images/bg_image.jpg'
export default function DashboardLayout(props) {
    const useStyles = makeStyles((theme) => ({
        layout: {
            minHeight: "100vh"
        },
        header: {
            backgroundColor: theme.palette.primary.main,
            padding: "10px 20px",
            borderBottom: "2px solid " + theme.palette.grey[600],
        },
        body: {
            display: "flex",
            // border:"1px solid red"
        },
        sideBar: {
            // backgroundColor: theme.palette.grey[500],
            boxShadow: "2px -4px 5px grey",
            background: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            "& div": {
                backgroundColor: "rgba(255, 255, 255, 0.759)",
                width: "200px",
                padding: "20px 10px",
                minHeight: "100%"

            }
        },
        main_content: {
            padding: theme.spacing(5),
            width: "90%",
            // border:"1px solid red"
        },
        footer: {
        }
    }));

    // style classes initialized
    const classes = useStyles()
    // Auth User
    const { user } = useContext(AuthContext)
    // page navigation
    const history = useHistory()
    useEffect(() => {
        console.log(user)
        if (!user.isLogin) {
            history.push('/sign-in')
        }
    })
    return (
        <section className={classes.layout} >
            <section className={classes.header}>
                <DashboardHeader />
            </section>
            <section className={classes.body}>
                <div className={classes.sideBar}>
                    <div>
                        <TutorSideBar />
                    </div>
                </div>
                <div className={classes.main_content}>
                    {props.children}
                </div>
            </section>
        </section>
    )
}
