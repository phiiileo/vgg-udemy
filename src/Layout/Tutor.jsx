import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './tutor.scss';
import Sidebar from '../Components/SideBar/Sidebar';
import TutorDashboard from '../Components/TutorDashboard/TutorDashboard';
import Header from '../Components/Header/Header';
import 'font-awesome/css/font-awesome.min.css';
import AllVideos from '../Components/AllVideos/AllVideos';
export default class Tutor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRoute: "dashboard",
            accessLevel: "tutor"
        }
    }

    changeRoute = (route) => {
        this.setState({ activeRoute: route })
    }
    render() {
        let data = this.props.data;
        let ActivePage;
        (this.state.activeRoute === "dashboard") ? ActivePage = <TutorDashboard data={data} /> : ActivePage = <AllVideos access={this.state.accessLevel} />
        return (
            <div className="tutor">
                <Helmet>
                    <title>Tutor | Home</title>
                </Helmet>
                <Sidebar changeRoute={this.changeRoute} access={this.state.accessLevel} title="Tutor" data={data} />
                <div className="tutor-main">
                    <Header data={data.email} />
                    {ActivePage}
                </div>
            </div>
        )
    }
}
