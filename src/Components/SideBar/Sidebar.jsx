import React, { Component } from 'react';
import './sidebar.scss';

export default class Sidebar extends Component {
    componentDidMount() {
        console.log(this.props.data)
    }
    render() {
        return (
            <div className="sidebar">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
