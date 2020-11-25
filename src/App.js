import React from 'react';
import './App.css';
import Service from './Service'
import CustList from './CustList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            bill: 0,
            listItem: [{ name: '', experience: 0.1 }],
            totalTip: 0,
            tipeach: [],
            listCust:[],
            totalbill:0
        }
    }

    handleChange = (event, index) => {
        const updatelist = { ...this.state.listItem[index], [event.target.name]: event.target.value }
        this.setState({ listItem: [...this.state.listItem.slice(0, index), updatelist, ...this.state.listItem.slice(index + 1)] })

        this.state.listItem.forEach((item, index) => {
            this.setState({ tipeach: [...this.state.tipeach.slice(0), item.experience * this.state.bill] })
        })
    }

    addCustomer = (event) => {
        this.setState({ listItem: [...this.state.listItem, { name: '', experience: 0.1 }] })

        this.state.listItem.forEach((item, index) => {
            this.setState({ tipeach: [...this.state.tipeach.slice(0), item.experience * this.state.bill] })
        })
        console.log(this.state.tipeach)
    }

    calculateTip = () => {
        let tipTotal = 0
        this.state.listItem.forEach((item,index) => {
            tipTotal += item.experience * this.state.bill
            this.setState({ tipeach: [...this.state.tipeach.slice(0, index), item.experience * this.state.bill] })
        })
        this.setState({ totalTip: tipTotal })

        let listcust = this.state.listItem.map((item, index) => (`${item.name} offered a tip of Rs. ${item.experience * this.state.bill }`))
        this.setState({ listCust: listcust })
        this.setState({ totalbill: parseInt(this.state.bill)+ tipTotal})
    }

    render() {
        console.log(this.state, "State")
        return (
            
            <div>
                <header>
                    <h2>Tip Calculator</h2>
                    <p><strong>BUILT IN REACT</strong></p>
                </header>
                <div class="container">
                    <div class="row">
                        <div class="col-25">
                            <div class="label">Enter the Bill amount:</div>
                        </div>
                        <div class="col-75">
                            <input type="text" name="bill" onChange={(event) => { this.setState({ bill: event.target.value }) }} />
                        </div>
                    </div>
                    <br />

                    {this.state.listItem.map((items, index) => {
                        return (
                            <Service customerDetails={items} key={index} itemIndex={index} handleChange={this.handleChange} />
                        )
                    })}
                    <div class= "row">
                        <button type="submit" value="Submit" onClick={this.addCustomer}>Add Customer</button>

                        <button type="submit" value="submit" onClick={this.calculateTip} style={{ float: "right" }}>Calculate Tip!</button>
                    </div>

                    <hr/>

                    <CustList bill= {this.state.bill} totaltip={this.state.totalTip} listItem={this.state.listItem} tip={this.state.listCust} totalbill={this.state.totalbill}/>
                </div>

                <footer>
                    <h3><strong>@2020 TIP CALCULATOR</strong></h3>
                </footer>
  
            </div>

        )
    }
        
    
}
export default App;
