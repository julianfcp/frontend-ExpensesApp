import React, { Component } from 'react'

export default class AddExpenses extends Component {
    render() {
        return (
            <div className={this.props.hideAddExpenses}>
                <div className="content-form-addExpenses">
                    <div className="row">
                        <div className="col">
                            <form id="create-note-form" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    
                                </div>
                                {/** Note Title */}
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        name="title"
                                        required />
                                </div>
                                {/** Note Content */}
                                <div className="form-group">
                                    <textarea
                                        name="content"
                                        className="form-control"
                                        placeholder="Content"
                                        required>
                                    </textarea>
                                </div>
                                {/** Date Note */}
                                <div className="form-group">
                                    
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
