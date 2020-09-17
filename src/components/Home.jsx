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
            Movie_info: 'Movie',
            ProjectIV_info: 'ProjectIV',
            Portfolio_info: 'project'
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
                            <p> What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Test
                          </p>
                        </aside>
                    </section>
                    :
                    (this.props.currentPage === 'About') ?
                        <section>
                            <h1>Home</h1>
                            <h3>About me</h3>
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Test
                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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