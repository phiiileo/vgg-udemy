import React, { Component } from 'react';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openNav: false,
            activeRoute: "dashboard"
        }
    }
    componentDidMount() {
        console.log(this.props.data)
    }
    openNavBar = () => {
        this.setState({ openNav: !this.state.openNav })
    }
    changeRoute = (route) => {
        this.setState({ activeRoute: route });
        this.openNavBar()
        this.props.changeRoute(route)
    }
    render() {
        const data = this.props.data;
        const openNav = this.state.openNav ? "open" : null
        const icon = this.state.openNav ? "times" : "bars";
        let showMenu;
        const Menu = (
            <menu>
                <ul>
                    <li className={this.state.activeRoute === "dashboard" ? "active" : ""} onClick={() => this.changeRoute("dashboard")}>Dashboard</li>
                    <li className={this.state.activeRoute === "all-videos" ? "active" : ""} onClick={() => this.changeRoute("all-videos")}>All Videos</li>
                </ul>
            </menu>
        );
        (this.props.access === "tutor") ? showMenu = Menu : showMenu = null;

        return (
            <div className={"sidebar " + openNav}>
                <div className="sidebar-container">
                    <i onClick={this.openNavBar} className={"navMenu fa " + icon}>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                    <div className="userDetails">
                        <span><img src={data.imageUrl} alt="user" /></span>
                        <p>{data.name}</p>
                        <p>{this.props.title}</p>
                    </div>

                    <div>
                        {showMenu}
                    </div>
                </div>
            </div>

        )
    }
}
