import React, { Component } from 'react'

export default class CustList extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div>
                <h2><strong>Customer List</strong></h2>
                <div class="output">
                    <ul>
                        {this.props.tip.map((item, index) => (
                            <li key={index}><strong>{item}</strong></li>
                        ))}
                    </ul>
                <hr/>
                    <table>
                        <thead>
                            <tr>
                                <th>Total Number of customers</th>
                                <th>Total Tip</th>
                                <th>Total Bill to be paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.tip.length }</td>
                                <td>Rs. {this.props.totaltip}</td>
                                <td>Rs. {this.props.totalbill}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <br />

                </div>
            </div>
        )
    }
}