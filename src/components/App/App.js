import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

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
          // console.log(this.state.pics);
        });
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  likePic = (id) => {
    axios({
      method: 'PUT',
      url: '/gallery/like/' + id
    })
      .then((response) => {
          console.log(response);
          console.log(this.state);
          this.getPics();
    })
       .catch((err) => {
        console.warn(err);
    })
  }
  
  ////// END NEW STUFF /////////

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DaneWorld</h1>
        </header>
        <br />
        <GalleryList pics={this.state.pics} likePic={this.likePic} />
      </div>
    );
  }
}

export default App;
