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

    // async componentDidMount() {
    //     this.setState({
    //         loading: true
    //     });
    //     const res = await axios.get(
    //         `https://api.github.com/users?client_id=${
    //             process.env.REACT_APP_GITHUB_CLIENT_ID
    //         }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    //     );
    //     this.setState({
    //         users: res.data,
    //         loading: false
    //     });
    // }
    // SEARCH GITHUB USERS
    searchUsers = async text => {
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
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Search searchUsers={this.searchUsers} />
                    <Users
                        loading={this.state.loading}
                        users={this.state.users}
                    />
                </div>
            </div>
        );
    }
}

export default App;
