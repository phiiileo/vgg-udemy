import React, { Component } from 'react';
import './sidebar.scss';

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openNav: false
        }
    }
    componentDidMount() {
        console.log(this.props.data)
    }
    openNavBar = () => {
        this.setState({ openNav: !this.state.openNav })
    }
    render() {
        const data = this.props.data;
        const openNav = this.state.openNav ? "open" : null
        const icon = this.state.openNav ? "fa-close" : "fa-bars"
        return (
            <div className={"sidebar " + openNav}>
                <i onClick={this.openNavBar} className={"navMenu fa " + icon}></i>
                <div className="userDetails">
                    <span><img src={data.imageUrl} alt="user" /></span>
                    <p>{data.name}</p>
                    <p>{this.props.title}</p>
                </div>

                <menu>
                    <ul>
                        <li>Dashboard</li>
                        <li>All Videos</li>
                    </ul>
                </menu>
            </div>
        )
    }
}
