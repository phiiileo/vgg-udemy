import React from 'react'
import { Button } from '@material-ui/core'

export default function CustomButton(props) {
    const { button_text, ...rest } = props
    return (
        <Button {...rest}>{button_text}</Button>
    )
}
