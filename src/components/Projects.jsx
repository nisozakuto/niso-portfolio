import React, { Component } from "react";
import blackjack from "../assets/blackjack.jpg";
import photobook from "../assets/photobook.jpg";
import msnmtdb from "../assets/msnmtdb.jpg";
import coffeeapp from "../assets/coffeeapp.jpg";
import passwordGenerator from "../assets/passwordGenerator.jpg";
import Project from "../components/Project";
import chuckNorris from "../assets/ChuckNorris.png";
export default class Projects extends Component {
  render() {
    return (
      <section className="projects-section">
        <h1>Projects</h1>
        <ul className="projects-ul">
          <Project
            imageSrc={blackjack}
            alt="A card game made with HTML, CSS and JS only"
            title="Blackjack game"
            text="A card game built with Javascript only"
            githubLink="https://github.com/nisozakuto/Blackjack"
            githubLinkA="github.com/nisozakuto/Blackjack"
            visitPage="https://nisozakuto.github.io/Blackjack/"
          />
          <Project
            imageSrc={photobook}
            alt="Photobook project made with Express JS"
            title="Photobook App"
            text=" Photobook app is created to help photographers to post their albums and share them with their clients. Currently, the app is letting visitors to sign up, login, create albums based on the keywords that are available and browse between pictures."
            githubLink="https://github.com/nisozakuto/ThePhotobook"
            githubLinkA="github.com/nisozakuto/ThePhotobook"
            visitPage="https://thephotobook.herokuapp.com"
          />
          <Project
            imageSrc={msnmtdb}
            alt="Team work project made with Node JS, Express and React JS"
            title="Movie TV Database App"
            text="This is app enables you to browse through Movies and TV shows in an easy way"
            githubLink="https://github.com/nisozakuto/MSN-MTDB"
            githubLinkA="github.com/nisozakuto/MSN-MTDB"
            visitPage="https://evening-basin-19807.herokuapp.com"
          />
          <Project
            imageSrc={coffeeapp}
            alt="Coffee app project with Ruby on Rails and React"
            title="Reactive Coffee"
            text="Ready to order your coffe, virtually?"
            githubLink="https://github.com/nisozakuto/ReactiveCoffee"
            githubLinkA="github.com/nisozakuto/ReactiveCoffee"
            visitPage="https://reactive-coffee-staging.herokuapp.com"
          />
          <Project
            imageSrc={passwordGenerator}
            alt="Password generator app that has crypto password generation option"
            title="Password Generator"
            text="This app was created to serve individuals who need a strong password. The app gives you four different options to create the password."
            githubLink="https://github.com/nisozakuto/password-generator"
            githubLinkA="github.com/nisozakuto/password-generator"
            visitPage="https://z-password-generator.netlify.app"
          />
          <Project
            imageSrc={chuckNorris}
            alt="A fun app created using Chuck Norris API"
            title="Chuck Norris API page"
            text="A free API to use, I wanted to take the opportunity and implement a few things I haven't used in the past"
            githubLink="https://github.com/nisozakuto/chuck-norris"
            githubLinkA="github.com/nisozakuto/chuck-norris"
            visitPage=""
          />
        </ul>
      </section>
    );
  }
}
