import React, { Component } from 'react'

class Service extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-25">
                        <div class="label">Enter your name:</div>
                    </div>
                    <div class="col-75">
                        <input type="text" id="name" name="name" value={this.props.name} onChange={(event) => { this.props.handleChange(event, this.props.itemIndex) }} />
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <div class="label">How was the service?</div>
                    </div>
                    <div class="col-75">
                        <select id="experience" name="experience" value={this.props.experience} onChange={(event) => { this.props.handleChange(event, this.props.itemIndex) }}>
                            <option value={0.2}>Excellent !!</option>
                            <option selected value={0.1}>Moderate !</option>
                            <option value={0.05}>Bad </option>
                        </select>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Service