import React, { useCallback } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import VideoList from '../../components/video/videoList/VideoList'
import { useEffect } from 'react'
import axios from '../../axios/axios'
import { useState } from 'react'
import { useContext } from 'react'
import { VideoContext } from '../../state-manager/contexts/videoContext/VideoContext'

export default function Videos() {
    // const [videos, setVideos] = useState([])
    const videos = useContext(VideoContext)

    const fetchVideos = useCallback(async () => {
        const res = await axios.get('videos/all')
        console.log(res.data)
        // dispatch(res.data.data)
    }, [])
    console.log(videos)
    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])
    return (

        <DashboardLayout>
            <h1>All videos</h1>

            <VideoList videos={videos || []} />
        </DashboardLayout>
    )
}
