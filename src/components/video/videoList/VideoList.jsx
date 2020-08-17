import React from 'react'
import VideoCard from '../videoCard/VideoCard'
import { makeStyles } from '@material-ui/core'

export default function VideoList(props) {

    const useStyles = makeStyles(theme => ({
        root: {
            display: "grid",
            gridGap: theme.spacing(5, 2),
            flexWrap: "wrap",
            [theme.breakpoints.up('sm')]: {
                gridTemplateColumns: '1fr 1fr'
            },
            [theme.breakpoints.up('md')]: {
                gridTemplateColumns: '1fr 1fr 1fr'
            },
            [theme.breakpoints.up('lg')]: {
                gridTemplateColumns: 'repeat(4, 1fr)'
            }
        }
    }));
    const classes = useStyles()
    return (
        <section className={classes.root} >
            {
                props.videos.map((video, i) => {
                    return <VideoCard key={i} data={video} />
                })
            }
        </section>
    )
}
