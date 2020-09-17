import React, { Component } from 'react'

export default class Collapsible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this)
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }
    render() {
        return (
            <div className="ul-items">
                <div onClick={(e) => this.togglePanel(e)} className='single-project'>
                    {this.props.title}</div>
                {
                    this.state.open ? (
                        <div className='content'>
                            {this.props.children}
                        </div>
                    ) : null
                }
            </div >);
    }
}
