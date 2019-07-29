import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './NavBar';

import "./App.css"

class App extends React.Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
