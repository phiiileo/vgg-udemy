import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Typography } from '@material-ui/core';

const iconLibrary = [{
    name: 'show',
    icon: <Visibility />
}, {
    name: 'hide',
    icon: <VisibilityOff />
}]


export const getIcons = (icon_name) => {
    console.log(icon_name)
    const _icon = iconLibrary.filter(icon => {
        return icon.name === icon_name
    })
    if(_icon.length === 0){
        console.error(`icon name(${icon_name}) not valid`)
        return <Typography> No Icon</Typography>
    }else{
        return _icon[0].icon
    }
    // return 1
}