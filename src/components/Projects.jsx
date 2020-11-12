import React, { Component } from 'react'
import blackjack from '../assets/blackjack.jpg'
import photobook from '../assets/photobook.jpg'
import msnmtdb from '../assets/msnmtdb.jpg'
import coffeeapp from '../assets/coffeeapp.jpg'
import passwordGenerator from '../assets/passwordGenerator.jpg'
export default class Projects extends Component {
    render() {
        return (
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

                    <div className="project-box">
                        <img src={passwordGenerator} width="500px" alt="Photobook project made with Express JS" />
                        <h3>Password Generator</h3>
                        <article>
                            This app was created to serve individuals who need a strong password. The app gives you four different options to create the password.
                    </article>
                        <p>Github page: <a href="https://github.com/nisozakuto/password-generator" target="_blank" rel="noreferrer">github.com/nisozakuto/password-generator</a></p>
                    </div>
                </ul>
            </section>

        )
    }
}
