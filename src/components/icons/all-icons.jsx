import React from 'react'
import { Visibility, AlternateEmail, Twitter, Facebook, ExitToApp } from '@material-ui/icons';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Typography } from '@material-ui/core';

const iconLibrary = [{
    name: 'show',
    icon: <Visibility />
}, {
    name: 'hide',
    icon: <VisibilityOff />
}, {
    name: "google",
    icon: <AlternateEmail />
},
{ name: "facebook", icon: <Facebook /> },
{ name: "twitter", icon: <Twitter /> },
{ name: "logout", icon: <ExitToApp /> },
    // { name: "twitter", icon: <Twitter /> },
    // { name: "twitter", icon: <Twitter /> },

]


export const getIcons = (icon_name) => {
    console.log(icon_name)
    const _icon = iconLibrary.filter(icon => {
        return icon.name === icon_name
    })
    if (_icon.length === 0) {
        console.error(`icon name(${icon_name}) not valid`)
        return <Typography> No Icon</Typography>
    } else {
        return _icon[0].icon
    }
    // return 1
}