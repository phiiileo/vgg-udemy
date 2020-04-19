import React, { Component } from 'react';
import './sidebar.scss';

export default class Sidebar extends Component {
    componentDidMount() {
        console.log(this.props.data)
    }
    render() {
        const data = this.props.data
        return (
            <div className="sidebar">
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
