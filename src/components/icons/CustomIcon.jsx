import React from 'react'
import { getIcons } from './all-icons'
import { IconButton } from '@material-ui/core';


// custom Icon component
export default function CustomIcon(props) {
    const customIcon = getIcons(props.name);
    return (
        <IconButton color="primary" {...props}>
            {customIcon}
        </IconButton>)
}