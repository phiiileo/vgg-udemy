import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import VideoList from '../../components/video/videoList/VideoList'

export default function Videos() {

    const vidoes = [
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588761947/api_uploads/tqhzf4dgfe7oolajeylr.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588762781/api_uploads/fazu6unozyqziarsklcm.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588616736/api_uploads/ik8alssvgot2qc6rlidp.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588530437/api_uploads/ij9xpdri9eia8zbeklhs.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588530213/api_uploads/hzgzah4awvtikhzplbm4.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1569439734/samples/sea-turtle.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588761947/api_uploads/tqhzf4dgfe7oolajeylr.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588762781/api_uploads/fazu6unozyqziarsklcm.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588616736/api_uploads/ik8alssvgot2qc6rlidp.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588530437/api_uploads/ij9xpdri9eia8zbeklhs.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1588530213/api_uploads/hzgzah4awvtikhzplbm4.mp4' },
        { link: 'https://res.cloudinary.com/phiileo/video/upload/v1569439734/samples/sea-turtle.mp4' }
    ]

    return (

        <DashboardLayout>
            <h1>All videos</h1>

            <VideoList videos={vidoes} />
        </DashboardLayout>
    )
}
