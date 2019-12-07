import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  ////// NEW STUFF ////////

  state = {
    pics: []

  }

  componentDidMount() {
    this.getPics();
  }

  getPics = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
        this.setState({
          pics: response.data
        }, () => {
          console.log(this.state.pics);
        });
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  ////// END NEW STUFF /////////

  render() {

    const picsArray = this.state.pics.map((item, index) => {
      return (
        <div key={index}>
          <p><img src={item.path}/></p>
        </div>

      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        {picsArray}
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
