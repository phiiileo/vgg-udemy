import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

export default function OuterHeader() {
    const useStyles = makeStyles((theme) => ({
        header: {
            "& ul": {
                display: "flex",
                listStyleType: "none",
                alignItems: "center"
            }
        },
        contact: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: theme.palette.grey[900],
            color: "white",
            padding: "8px 4%",
            "& div": {
                display: "flex",
                alignItems: "center",
                "& p": {
                    marginRight: "20px",
                    "&:hover": {
                        color: "red"
                    }
                },
                "& a": {
                    color: "white",
                    marginLeft: "20px",
                    display: "block"
                },
                "& ul li:last-child a": {
                    backgroundColor: "white",
                    color: theme.palette.grey[900],
                    padding: "10px 20px",
                    borderRadius:theme.spacing(1)
                }
            }
        },
        navigation: {
            padding: "25px 13%",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid ${theme.palette.grey[500]}`,
            "& nav": {
                "& ul > li": {
                    marginLeft: "20px"
                }
            }

        }
    }));
    const classes = useStyles()
    return (
        <header className={classes.header}>
            <section className={classes.contact}>
                <div>
                    <p>Icon</p>
                    <p>+234 12345678</p>
                    <p>emmanuel@gmail.com</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/sign-in">
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign-up">
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={classes.navigation}>
                <p>
                    <Link to="/">
                        U-Phileo
                    </Link>
                </p>
                <nav>
                    <ul>
                        <li><Link to=''>About </Link></li>
                        <li><Link to=''>Pricing </Link></li>
                        <li><Link to=''>Services </Link></li>
                    </ul>
                </nav>
            </section>

        </header>
    )
}
