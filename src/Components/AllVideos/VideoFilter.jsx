import React, { Component } from 'react'

export default class VideoFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.searchValue);
        this.props.filter(this.state.searchValue)
    }
    handleInput = (e) => {
        this.setState({ searchValue: e.target.value })
    }
    render() {
        const formGroupStyle = {
            display: "flex",
            justifyContent: "flex-end",
            // border: "1px solid red"
        }
        const inputStyle = {
            padding: "2px 10px",
            border: "1px solid skyblue",
            width: "250px",
            borderRadius: "5px 0 0 5px",
            backgroundColor: "transparent",
        }

        const btnStyle = {
            borderRadius: "0px 5px 5px 0px",
            height: "auto"
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div style={formGroupStyle} className="form-group">
                        <input
                            style={inputStyle}
                            value={this.state.searchValue}
                            onChange={this.handleInput}
                            type="text" />
                        <button style={btnStyle} type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
VideoFilter.defaultProps = {
    filter: () => console.log("You need to handle the response, pass a prop - name:filter and value is a function")
}