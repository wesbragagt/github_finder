import React, { Fragment, Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';

class App extends Component {
    
    render() {
       
       const loading = true;
        return (
            <div className="App">
                <Navbar />
            </div>
        );
    }
}

export default App;
