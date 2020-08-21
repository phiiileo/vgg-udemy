import React from 'react'
import { createContext } from "react";
import { useReducer } from 'react';
import AuthReducer from '../../AuthReducer';


export const VideoContext = createContext();

const VideoProvider = (props) => {

    const [videos, dispatch] = useReducer(AuthReducer, {
        videos: []
    })
    return <VideoContext.Provider value={{ videos, dispatch }}>
        {props.children}
    </VideoContext.Provider>
}

export default VideoProvider