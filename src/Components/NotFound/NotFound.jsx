import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './notfound.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {

    const [goBackTo, setCurrent_cat] = useState("/")

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("vgg-auth"));
        if (currentUser) {
            setCurrent_cat("/home-"+currentUser.user_category)
        }
    }, [goBackTo])

    return (
        <div className="not-found">
            <h1 style={{ color: "deepblue" }}>
                Opppsss!!! The page you are looking for does not exist.
            </h1>
            <p className="message">Drop your message here <FontAwesomeIcon icon="heart" /></p>

        <a href="https://twitter.com/phileoManuel"> <i style={{ color: "red", fontSize: "50px", display: "block", marginTop: "50px" }}><FontAwesomeIcon icon="ambulance" /></i></a>

            <Link to={ goBackTo}>Go back</Link>
        </div>
    )
}
