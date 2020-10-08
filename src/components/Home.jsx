import React, { Component } from 'react'
import Collapsible from '../components/Collapsible'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Blackjack_info: 'Blackjack game built with Javascript',
            Photobook_info: "Photobook app, connecting clients with the Photographers. Client's photographer will send you the pictures through this application.Client will be able to go into the brand new album, browse through the old albums, like, delete the photos that they like.",
            Movie_info: 'This was my first team work project using Node JS and React JS. I had a lot fun working in a 3 people team and dividing different tasks. Coming over from the complications together gives me an idea what working in a team and building project would look like.',
            ProjectIV_info: 'My 4th project is a Coffee Shop application, Ruby on Rails in the backend and React in the front end.',
            Portfolio_info: 'You are viewing right now :)'
        }
    }
    render() {
        return (
            <main>
                {(this.props.currentPage === 'Home') ?
                    <section className="homePage">
                        <article>
                            <h2>Hello you!</h2>
                            <h2>My name is Niso. </h2>
                            <h3>Software Engineer | Web developer</h3>
                            <h3>Looking for a solution? <span className="span-color"> I am a great problem solver</span></h3>
                        </article>
                        <aside>
                            <p>I am currently working on my <code><em>React JS</em></code>, <code><em>Node JS</em></code> and <code><em>Ruby on Rails</em></code>.</p>
                            <p> </p>
                        </aside>
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
                            <section>
                                <h1>Projects</h1>
                                <ul>
                                    <Collapsible title={"Blackjack"} children={this.state.Blackjack_info} />
                                    <Collapsible title={"Photobook"} children={this.state.Photobook_info} />
                                    <Collapsible title={"Movie - Series Database"} children={this.state.Movie_info} />
                                    <Collapsible title={"Project IV"} children={this.state.ProjectIV_info} />
                                    <Collapsible title={"Portfolio Project"} children={this.state.Portfolio_info} />
                                </ul>
                            </section>
                            :
                            (this.props.currentPage === 'Contact') ?
                                <div>
                                    <h1 className="center">Contact</h1>
                                    <section className="contact">
                                        <article>
                                            <h3>Choose one of the options to get in touch </h3>
                                            <ul>
                                                <li><FaLinkedin /> <a target="_blank" href="https://www.linkedin.com/in/nisozakuto">LinkedIn</a></li>
                                                <li><FaRegEnvelope /> <a target="_blank" href="mailto:nisozakuto@gmail.com">Email</a></li>
                                            </ul>
                                        </article>
                                        <article>
                                            <h3>or check out my Github profile</h3>
                                            <ul>
                                                <li><FaGithub /><a target="_blank" href="https://github.com/nisozakuto">Github</a> </li>
                                            </ul>
                                        </article>

                                    </section>
                                </div>
                                :
                                <div>na</div>
                }
            </main>
        )
    }
}


// Deleted the yarn.lock