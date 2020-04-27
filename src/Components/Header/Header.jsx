import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props) {

    const resetLogin = () => {
        localStorage.setItem("vgg-user", {})
        localStorage.setItem("vgg-auth", null)
        window.location.href = "/"
    }

    return (
        <header>
            <h3 style={{wordWrap:"break-word", width:"70%"}}>{props.email}</h3>
            <button onClick={resetLogin}>
            <FontAwesomeIcon icon="sign-out-alt" color="white" size="lg"/>
         </button>
        </header>
    )
}

Header.defaultProps = {
    email: "placeholdfhffhfhfhfhfhhfhffhfher@email.com",
}
