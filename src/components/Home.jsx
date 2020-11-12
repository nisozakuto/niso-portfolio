import React, { Component } from 'react'
import Projects from './Projects'
import Contact from './Contact'
export default class Home extends Component {
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
                            <Projects />
                            :
                            (this.props.currentPage === 'Contact') ?
                                <Contact />
                                :
                                <div>Wrong Path</div>
                }
            </main>
        )
    }
}
