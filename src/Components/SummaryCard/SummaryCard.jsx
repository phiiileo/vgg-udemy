import React, { Component } from 'react'
import './summaryCard.scss'
export default class SummaryCard extends Component {
    render() {

        return (
            <div className="summaryCard" style={this.props.style}>
                <p>{this.props.title}</p>
                <i className={this.props.icon}></i>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

SummaryCard.defaultProps = {
    title: "Card Title",
    value: 0,
    style: {
        color: "black"
    },
    icon: "fa fa-question"
}
