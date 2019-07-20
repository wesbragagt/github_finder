import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import UserItem from './Components/Users/UserItem';
import './App.css';

class App extends Component {
    
    
    render() {
       
       
        return (
            <div className="App">
                <Navbar />
                <UserItem/>
            </div>
        );
    }
}

export default App;
