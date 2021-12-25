import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Framework from "./Components/Framework/Framework";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>calculate your price</h1>
        <Framework />
      </div>
    );
  }
}

export default App;
