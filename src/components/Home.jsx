import React, { Component } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Blackjack_info: 'Blackjack game built with Javascript',
      // Photobook_info: "Photobook app, connecting clients with the Photographers. Client's photographer will send you the pictures through this application.Client will be able to go into the brand new album, browse through the old albums, like, delete the photos that they like.",
      // Movie_info: 'This was my first team work project using Node JS and React JS. I had a lot fun working in a 3 people team and dividing different tasks. Coming over from the complications together gives me an idea what working in a team and building project would look like.',
      // ProjectIV_info: 'My 4th project is a Coffee Shop application, Ruby on Rails in the backend and React in the front end.',
      // Portfolio_info: 'You are viewing right now :)'
    };
  }
  leaveHome = () => {};
  render() {
    return (
      <main className="home-page bg">
        {this.props.currentPage === "Home" ? (
          <section className="home-page-section">
            <article>
              <h1>
                Hello! My name is <span>Niso.</span>
              </h1>
              <h3>I am a full stack Software Engineer and Web developer</h3>
            </article>

            <article>
              <button
                onClick={() => this.props.setPage("Projects")}
                className="homepage-button"
              >
                Learn more
              </button>
            </article>
          </section>
        ) : this.props.currentPage === "About" ? (
          <section></section>
        ) : this.props.currentPage === "Projects" ? (
          <Projects />
        ) : this.props.currentPage === "Contact" ? (
          <Contact />
        ) : (
          <div>Wrong Path</div>
        )}
      </main>
    );
  }
}
