import React, { Component } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Home'
    }
  }
  setPage = (page) => {
    console.log(page)
    this.setState({
      currentPage: page
    })
  }
  render() {
    return (
      <div className="App">
        <Header currentPage={this.state.currentPage} setPage={this.setPage} />
        <Home currentPage={this.state.currentPage} />
        <Footer />
      </div>
    )
  }
}
