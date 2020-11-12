import React, { Component } from 'react'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"
import blackjack from '../assets/blackjack.png'
import photobook from '../assets/photobook.png'
import msnmtdb from '../assets/msnmtdb.png'
import coffeeapp from '../assets/coffeeapp.png'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Blackjack_info: 'Blackjack game built with Javascript',
            // Photobook_info: "Photobook app, connecting clients with the Photographers. Client's photographer will send you the pictures through this application.Client will be able to go into the brand new album, browse through the old albums, like, delete the photos that they like.",
            // Movie_info: 'This was my first team work project using Node JS and React JS. I had a lot fun working in a 3 people team and dividing different tasks. Coming over from the complications together gives me an idea what working in a team and building project would look like.',
            // ProjectIV_info: 'My 4th project is a Coffee Shop application, Ruby on Rails in the backend and React in the front end.',
            // Portfolio_info: 'You are viewing right now :)'
        }
    }
    render() {
        return (
            <main className="home-page">
                {(this.props.currentPage === 'Home') ?
                    <section className="home-page-section">
                        <article>
                            <h1>Hello! My name is <span>Niso.</span></h1>
                            <h3>I am a full stack Software Engineer and Web developer</h3>
                        </article>

                        <article>
                        </article>
                    </section>
                    :
                    (this.props.currentPage === 'About') ?
                        <section>
                            <h1>Home</h1>
                            <h3>About me</h3>
                            <p>
                                Recently, I finished studying 800+ hours of bootcamp education at the General Assembly. I expanded my Javascript skills and started using it for the backend as Node JS. Later, I learned React JS and built my very first full stack project and deployed it to Heroku.
                                In my last unit at the bootcamp, I left my comfort zone and started learning Ruby on Rails. After studying and learning JS heavily, I used Ruby on Rails for the backend of my fourth project.
                                I really enjoyed learning new things facing challenges and overcoming the problems I was having. Building something from scratch, continuing from some else's work or finding solutions for problems as a team gives me tremendous pleasure. I am open to discuss my background more in detail and chat further. Please reach out to me, nisozakuto@gmail.com
                            </p>
                        </section>
                        :
                        (this.props.currentPage === 'Projects') ?
                            <section className="projects-section">
                                <h1>Projects</h1>
                                <ul className="projects-ul">
                                    <div className="project-box">
                                        <img src={blackjack} width="500px" alt="A card game made with HTML, CSS and JS only" />
                                        <h3>Blackjack game</h3>
                                        <article>
                                            A card game built with Javascript only. Some of the instructions as follows :
                                            <ul>
                                                <li>- First you need to let the game know that you are starting the game</li>
                                                <li>- Each game, initally, player puts $10 in order to play. Player has to bet before the cards are dealt. It is not possible to bet once you hit a card</li>
                                                <li>- Which takes us to Hit / Stand stage:</li>
                                                <li>- Hit will give you another random card from the deck.</li>
                                                <li>- Will change the turn to the dealer.</li>
                                                <li>- Dealer has to hit as long as, they have less than 16 in number values.</li>
                                            </ul>
                                        </article>
                                        <p>Github page: <a href="https://github.com/nisozakuto/Blackjack" target="_blank" rel="noreferrer">github.com/nisozakuto/Blackjack</a></p>
                                        <p>Visit page: <a href="https://nisozakuto.github.io/Blackjack/" target="_blank" rel="noreferrer">Blackjack</a></p>
                                    </div>
                                    <div className="project-box">
                                        <img src={photobook} width="500px" alt="Photobook project made with Express JS" />
                                        <h3>Photobook App</h3>
                                        <article>
                                            Photobook app is created to help photographers to post their albums and share them with their clients.
                                            Currently, the app is letting visitors to sign up, login, create albums based on the keywords that are available and browse between pictures.
                                        </article>
                                        <p>Github page: <a href="https://github.com/nisozakuto/ThePhotobook" target="_blank" rel="noreferrer">github.com/nisozakuto/ThePhotobook</a></p>
                                        <p>Visit page: <a href="https://thephotobook.herokuapp.com/" target="_blank" rel="noreferrer">The Photobook</a></p>

                                    </div>
                                    <div className="project-box">
                                        <img src={msnmtdb} width="500px" alt="Team work project made with Node JS, Express and React JS" />
                                        <h3>Movie TV Database App</h3>
                                        <p>Github page: <a href="https://github.com/nisozakuto/MSN-MTDB" target="_blank" rel="noreferrer">github.com/nisozakuto/MSN-MTDB</a></p>
                                        <p>Visit page: <a href="https://evening-basin-19807.herokuapp.com/" target="_blank" rel="noreferrer">Staging Page</a></p>

                                    </div>
                                    <div className="project-box">
                                        <img src={coffeeapp} width="500px" alt="Coffee app project with Ruby on Rails and React" />
                                        <h3>Reactive Coffee</h3>
                                        <p>Github page: <a href="https://github.com/nisozakuto/ReactiveCoffee" target="_blank" rel="noreferrer">github.com/nisozakuto/ReactiveCoffee</a></p>
                                        <p>Visit page: <a href="https://reactive-coffee-staging.herokuapp.com/" target="_blank" rel="noreferrer">Reactive Coffee</a></p>

                                    </div>
                                </ul>
                            </section>
                            :
                            (this.props.currentPage === 'Contact') ?
                                <section className="home-page-section">
                                    <h1 className="center">Contact</h1>
                                    <section className="contact">
                                        <article>
                                            <h3>Choose one of the options to get in touch </h3>
                                            <ul className="contact-ul">
                                                <h3><FaLinkedin /> <a target="_blank" href="https://www.linkedin.com/in/nisozakuto">LinkedIn</a></h3>
                                                <h3><FaRegEnvelope /> <a target="_blank" href="mailto:nisozakuto@gmail.com">Email</a></h3>
                                            </ul>
                                        </article>
                                        <article>
                                            <h3>Check out my Github profile</h3>
                                            <ul>
                                                <h3><FaGithub /><a target="_blank" href="https://github.com/nisozakuto">Github</a> </h3>
                                            </ul>
                                        </article>
                                    </section>
                                </section>
                                :
                                <div>na</div>
                }
            </main>
        )
    }
}


// Deleted the yarn.lock