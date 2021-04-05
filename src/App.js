import './App.css';
import React from 'react';
import Shops from './components/shops.js';
import { getShops } from './requests';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shops: [],
    };
  }

  componentDidMount() {
    getShops()
    .then(response => response.json())
    .then(response => {
      this.setState({
        shops: response
      })
    })
    .catch(err => { console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h2>Top Ice Cream Shops</h2>
        <Shops shops={this.state.shops} />
      </header>
    </div>
    );
  }
}
