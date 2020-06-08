import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.sendRequest = this.sendRequest.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      product: {}
    };
  }

  handleClick() {
    this.sendRequest();
  }

  sendRequest() {
    fetch("https://world.openfoodfacts.org/api/v0/product/4316268552370.json")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          product: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return(
    <div className="App">
      <header className="App-header">
        <p>Send a get request:</p>
        <button type="button" onClick={this.handleClick}>Send!</button>
          <p>Product: {this.state.product}</p>
      </header>
    </div>
    )
  }

}

export default App;
