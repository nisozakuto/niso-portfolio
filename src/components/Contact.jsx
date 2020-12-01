import React, { Component } from 'react'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"
export default class Contact extends Component {
    render() {
        return (
            <section className="home-page-section">
                <h1 className="center">Contact</h1>
                <section className="contact">
                    <article>
                        <h3>Choose one of the options to get in touch </h3>
                        <ul className="contact-ul">
                            <h3><FaLinkedin /> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nisozakuto">LinkedIn</a></h3>
                            <h3><FaRegEnvelope /> <a target="_blank" rel="noreferrer" href="mailto:nisozakuto@gmail.com">Email</a></h3>
                        </ul>
                    </article>
                    <article>
                        <h3>Check out my Github profile</h3>
                        <ul>
                            <h3><FaGithub /><a target="_blank" rel="noreferrer" href="https://github.com/nisozakuto">Github</a> </h3>
                        </ul>
                    </article>
                </section>
            </section>
        )
    }
}
