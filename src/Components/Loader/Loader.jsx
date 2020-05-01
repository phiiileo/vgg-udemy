import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loader(props) {

    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timout = setTimeout(() => {
            setIsLoading(false)
        }, 10000)

        return clearTimeout(timout)
    })

    const loading = <div> {props.title} Loading <i style={{ marginLeft: "15px" }}><FontAwesomeIcon icon="spinner" spin /></i></div>;
    const error = <p style={{ color: "red" }}>No {props.title} to show</p>


    return (
        <div style={{ margin: "20px 0" }}>
            <h3 style={{ color: props.color, }}>
                {(isLoading) ? loading : error}
            </h3>
        </div >
    )
}
