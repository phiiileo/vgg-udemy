import React from 'react'
import { Link } from 'react-router-dom'
import CustomIcon from '../icons/CustomIcon'

export default function TutorSideBar() {
    return (
        <section>
            <ul>
                <li>
                    <CustomIcon name='dashboard' />
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <CustomIcon name='live-tv' />
                    <Link to='/videos'>Videos</Link>
                </li>
                <li>
                    <CustomIcon name='live-tv' />
                    <Link to='/upload'>Add Video</Link>
                </li>
                <li>
                    <CustomIcon name='person-outline' />
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        </section>
    )
}
