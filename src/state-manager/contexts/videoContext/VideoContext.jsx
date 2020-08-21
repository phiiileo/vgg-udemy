import React, { useReducer, createContext } from 'react'
import VideoReducer from '../../VideoReducer';


export const VideoContext = createContext();

const VideoProvider = (props) => {

    const [videos, dispatch] = useReducer(VideoReducer, {
        videos: []
    })

    console.log(videos.videos)
    return (
        <VideoContext.Provider value={{ videos: videos.videos, dispatch }}>
            {props.children}
        </VideoContext.Provider>
    )
}

export default VideoProvider