import React from 'react';
import './header.scss'

export default function Header(props) {

    const resetLogin = () => {
        localStorage.setItem("vgg-user", {})
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
    data: "email@email.com",
}
