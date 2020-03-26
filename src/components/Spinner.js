import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <div className={"spinner-border spinnerComp "+ this.props.hidespinner} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}
