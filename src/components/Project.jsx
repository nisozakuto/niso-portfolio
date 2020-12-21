import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="project-box">
          <aside>
            <img src={this.props.imageSrc} width="500px" alt={this.props.alt} />
            <h3>{this.props.title}</h3>
            <article>{this.props.text}</article>
          </aside>
          <aside className="links">
            <p>
              Github page:{" "}
              <a href={this.props.githubLink} target="_blank" rel="noreferrer">
                {this.props.githubLinkA}
              </a>
            </p>
            <p>
              {this.props.visitPage ? (
                <>
                  Visit page:{" "}
                  <a
                    href={this.props.visitPage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {this.props.title}
                  </a>
                </>
              ) : (
                <p>Not deployed yet</p>
              )}
            </p>
          </aside>
        </div>
      </>
    );
  }
}
