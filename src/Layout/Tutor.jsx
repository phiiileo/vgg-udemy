import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import dummyUser from '../dummyUser.png';
import './tutor.scss';
import Sidebar from '../Components/SideBar/Sidebar';
import TutorDashboard from '../Components/TutorDashboard/TutorDashboard';
import Header from '../Components/Header/Header';

export default class Tutor extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className="tutor">
                <Helmet>
                    <title>Tutor | Home</title>
                </Helmet>
                <div className="tutor-sidebar">
                    <Sidebar title="Tutor" data={data} />
                </div>
                <div className="tutor-main">
                    <Header data={data.email} />
                    <TutorDashboard data={data} />
                </div>
                {/* <div className="image">
                        <img src={data.imageUrl || dummyUser} alt="User" />
                    </div>
                    <div className="details">
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                    </div> */}
            </div>
        )
    }
}
