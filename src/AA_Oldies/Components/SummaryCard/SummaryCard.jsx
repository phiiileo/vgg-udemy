import React, { Component } from 'react'
import './summaryCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class SummaryCard extends Component {
    render() {
        let icon;
        (this.props.fab) ? icon = ["fab", this.props.icon] : icon = this.props.icon

        return (
            <div className="summaryCard" >
                <p>{this.props.title}</p>
                <i>
                    <FontAwesomeIcon icon={icon} color={this.props.color} />
                </i>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

SummaryCard.defaultProps = {
    title: "Card Title",
    value: 0,
    icon: "question",
    color: "black"
}
