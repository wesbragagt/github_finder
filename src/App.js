import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        users: [],
        loading: false
    };

    searchUsers = async text => {
        this.setState({ loading: true });
        console.log(text);
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${
                process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        this.setState({
            users: res.data.items,
            loading: false
        });
    };
    // Clear Users from State
    clearUsers = () =>
        this.setState({
            users: [],
            loading: false
        });
    render() {
        const {users, loading} = this.state;
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers} showClear={ users.length > 0 ? true : false}
                    />
                    <Users
                        loading={loading}
                        users={users}
                    />
                </div>
            </div>
        );
    }
}

export default App;
