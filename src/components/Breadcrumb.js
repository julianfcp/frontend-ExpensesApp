import React, { Component } from 'react'

export default class Breadcrumb extends Component {
    render() {
        return (
            <div>
                <div className={"breadcrumb "+this.props.hideBread}>
                    <span >/ Dashboard</span>
                </div>
            </div>
        )
    }
}
