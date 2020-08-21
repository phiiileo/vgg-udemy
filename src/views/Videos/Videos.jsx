import React, { useCallback, useContext } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import VideoList from '../../components/video/videoList/VideoList'
import { useEffect } from 'react'
import axios from '../../axios/axios'
import { VideoContext } from '../../state-manager/contexts/videoContext/VideoContext'

export default function Videos() {
    const { videos, dispatch } = useContext(VideoContext)

    const fetchVideos = useCallback(async () => {
        const res = await axios.get('videos/all')
        console.log(res.data)
        dispatch({
            type: "GET_VIDEOS",
            payload: res.data.data
        })
    }, [dispatch])
    console.log(videos)
    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])
    return (

        <DashboardLayout>
            <h1>All videos</h1>

            <VideoList videos={videos} />
        </DashboardLayout>
    )
}
