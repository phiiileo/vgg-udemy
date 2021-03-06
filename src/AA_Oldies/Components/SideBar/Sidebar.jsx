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
        const getRoute = sessionStorage.getItem("tutor-active-menu")
        // console.log(getRoute)
        if (getRoute) {
            this.setState({ activeRoute: getRoute })
        }
    }
    openNavBar = () => {
        this.setState({ openNav: !this.state.openNav })
    }
    changeRoute = (route) => {
        sessionStorage.setItem("tutor-active-menu", route)
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
                    <li
                        className={this.state.activeRoute === "dashboard" ? "active" : ""} onClick={() => this.changeRoute("dashboard")}>
                        <i className="menuIcon"><FontAwesomeIcon icon="tachometer-alt" /> </i>Dashboard
                    </li>
                    <li
                        className={this.state.activeRoute === "all-videos" ? "active" : ""} onClick={() => this.changeRoute("all-videos")}>
                        <i className="menuIcon"><FontAwesomeIcon icon={["fab", "youtube"]} /> </i>All Videos
                    </li>
                </ul>
            </menu>
        );
        (this.props.access === "tutor") ?
            showMenu = Menu :
            showMenu = <i className="studentIcon"><FontAwesomeIcon icon="user-graduate" /></i>;

        return (
            <div className={"sidebar " + openNav}>
                <div className="sidebar-container">
                    <i title="toggleMenu" onClick={this.openNavBar} className={"navMenu fa " + icon}>
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
