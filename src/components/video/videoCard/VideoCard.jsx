import React from 'react'
import ReactPlayer from 'react-player'
import { makeStyles, Typography } from '@material-ui/core';

export default function VideoCard(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            boxShadow: "1px 1px 1px " + theme.palette.grey[200]
        },
        videoContainer: {
            height: "200px",
            border: '1px solid ' + theme.palette.grey[500]
        }
    }));
    const classes = useStyles()
    const videoUrl = props.data.link || 'https://www.youtube.com/watch?v=Q8hm0vilhUU'
    return (
        <section className={classes.root}>
            <div className={classes.videoContainer}>
                <ReactPlayer
                    className='react-player fixed-bottom'
                    url={videoUrl}
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
            <div>
                <Typography variant="h6">Big Data</Typography>
                <Typography variant='caption'>Emmanuel Owojori</Typography>
                <Typography  variant='subtitle1'>4.8%</Typography>
                <Typography>$500</Typography>
            </div>
        </section>
    )
}
