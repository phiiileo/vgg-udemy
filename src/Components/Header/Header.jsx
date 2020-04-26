import React from 'react';
import './header.scss'

export default function Header(props) {

    const resetLogin = () => {
        localStorage.setItem("vgg-user", {})
        localStorage.setItem("vgg-auth", null)
        window.location.href = "/"
    }

    return (
        <header>
            <h3>{props.data}</h3>
            <button onClick={resetLogin}>
                Logout
         </button>
        </header>
    )
}

Header.defaultProps = {
    data: "placeholder@email.com",
}
