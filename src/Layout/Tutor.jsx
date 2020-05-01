import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './tutor.scss';
import Sidebar from '../Components/SideBar/Sidebar';
import TutorDashboard from '../Components/TutorDashboard/TutorDashboard';
import Header from '../Components/Header/Header';
// import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.css';
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
        // console.log("Tutor page", data)
        let ActivePage;
        (this.state.activeRoute === "dashboard") ? ActivePage = <TutorDashboard data={data.userData} /> : ActivePage = <AllVideos access={this.state.accessLevel} />
        return (
            <div className="tutor">
                <Helmet>
                    <title>Tutor | Home</title>
                </Helmet>
                <Sidebar changeRoute={this.changeRoute} access={this.state.accessLevel} title="Tutor" data={data.userData} />
                <div className="tutor-main">
                    <Header email={data.userData.email} />
                    <div style={(this.state.activeRoute !=="dashboard")? {padding:"20px 30px"}:null}>
                        {ActivePage}
                    </div>
                </div>
            </div>
        )
    }
}
