import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "Home",
      theme: "light",
    };
  }

  setPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  themeToggler = () => {
      this.state.theme === "light"
        ? this.setState({
            theme: "dark",
          })
        : this.setState({
            theme: "light",
          });
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyles />
          <div className="App">
            <Header
              currentPage={this.state.currentPage}
              setPage={this.setPage}
              themeToggler={this.themeToggler}
              theme={this.state.theme}
            />
            <Home currentPage={this.state.currentPage} />
            <Footer />
          </div>
        </>
      </ThemeProvider>
    );
  }
}
