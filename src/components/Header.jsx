import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: this.props.currentPage
        }
    }
    render() {
        return (
            <header>
                <nav>
                    <div className="logo">
                        <p className="logo-text">Zakuto</p>
                    </div>
                    <ul>
                        <li onClick={() => { this.props.setPage("Home") }}>Home</li>
                        <li onClick={() => { this.props.setPage("Projects") }}>Projects</li>
                        <li onClick={() => { this.props.setPage("Contact") }}>Contact</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
