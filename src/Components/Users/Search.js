import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    };
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    onSubmit = event => {
        event.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({
            text: ''
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="search for user..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
            </div>
        );
    }
}

export default Search;
