import React, { Component } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCode} />;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  leaveHome = () => {};
  render() {
    return (
      <main className="home-page bg">
        {this.props.currentPage === "Home" ? (
          <section className="home-page-section">
            <article>
              <h1>
                {element} Hello! {element}
              </h1>

              <h3>
                My name is <span>Niso.</span>
                <br />I am a full stack Software Engineer and Web developer
              </h3>
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
