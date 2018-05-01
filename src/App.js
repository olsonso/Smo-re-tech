import React, { Component } from 'react';
import './App.css';
import Blog from './blog';
import Layout from './layout/layout';

class App extends Component {

  state = { message: "Loading..." };

  // Load some data from the server to demonstrate communication between
  // the client and Node
  async componentDidMount() {
    try {
      const data = await fetch('/example-path');
      const json = await data.json();
      this.setState(json);
    } catch (e) {
      console.log("Failed to fetch message", e);
    }
  }

  render() {
    return (
      <div className="App">
    <Layout />
      </div>
    );
  }
}

export default App;
