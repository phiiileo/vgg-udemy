import React, { Component } from 'react'
import './videoFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        this.props.search(this.state.searchValue)
    }
    handleFilter = (e) => {
        this.props.filter(e.target.value)
    }
    handleInput = (e) => {
        this.setState({ searchValue: e.target.value })
    }
    render() {

        return (
            <div className="video-filter">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <select name="category" onChange={this.handleFilter} value={this.state.filterValue} placeholder="Filter by Preference">
                            <option value="0">Filter by Preference</option>
                            <option value="liked">Your Favorite Videos</option>
                            <option value="starred">Your Starred Videos</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.searchValue}
                            onChange={this.handleInput}
                            type="text" />
                        <button type="submit">
                            <FontAwesomeIcon icon="search" />
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
VideoFilter.defaultProps = {
    filter: () => console.log("You need to handle the response, pass a prop - name:search and value is a function"),
    search: () => console.log("You need to handle the response, pass a prop - name:filter and value is a function")
}