import React, { Component } from 'react'
import './notification.scss';


export default class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
        }
    }
    init = 0;
    addNotification = () => {
        const notificationBox = "Message"
        const _notifications = this.state.notifications;
        this.init++
        _notifications.shift({ id: this.init, message: notificationBox });
        this.setState({ notifications: _notifications })
        console.log(this.state.notifications)
        this.removeMessage(this.init)
    }
    removeMessage = (id) => {
        setTimeout(() => {
            const allNot = this.state.notifications;
            allNot.shift();
            this.setState({ notifications: [...allNot] })

        }, 3000);
    }

    render() {
        const notifications = this.state.notifications.map((message, index) => {
            return (
                <div className="notification-box animate" key={index}>message</div>
            )
        })
        return (
            <div className="notification">
                <button onClick={() => this.addNotification()}>CLICK</button>
                {notifications}

            </div >
        )
    }
}
