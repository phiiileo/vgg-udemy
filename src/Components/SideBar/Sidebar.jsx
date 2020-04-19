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
                </div>

                <menu>
                    <ul>
                        <li>Dashboard</li>
                        <li>Videos</li>
                        <li>Settings</li>
                    </ul>
                </menu>
            </div>
        )
    }
}
