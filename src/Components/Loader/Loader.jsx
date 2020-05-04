import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loader(props) {

    const loading = <div> {props.title} Loading <i style={{ marginLeft: "5px" }}><FontAwesomeIcon icon="spinner" spin /></i></div>;
    const errorMessage = <p style={{ color: "red" }}>{props.error.errMessage}</p>
    const error = props.error;

    return (
        <div style={{ margin: "20px 0" }}>
            <h3 style={{ color: props.color, }}>
                {error.errStatus ? errorMessage : loading}
            </h3>
        </div >
    )
}
