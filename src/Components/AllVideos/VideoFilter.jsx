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
            justifyContent: "flex-end"
        }
        const inputStyle = {
            padding: "5px 10px",
            border: "1px solid skyblue",
            width: "250px"

        }

        const btnStyle = {
            borderRadius: "0px 5px 5px 0px"
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
