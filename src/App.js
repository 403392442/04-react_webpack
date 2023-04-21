import React from 'react';

import "./App.css"
import History from "./components/history";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0,
            operation: "add",
            history: []
        }
    }

    selectOperation(e) {
        this.setState({ operation: e.target.value }, () => this.calculate())
        this.calculate();
    }

    changeNumber(e) {
        const target = e.target.classList[0];
        this.setState({ [target]: parseInt(e.target.value) }, () => this.calculate())
        this.calculate();
    }

    calculate() {
        const operation = this.state.operation;
        switch (operation) {
            case "add":
                const result = parseInt(this.state.num1) + parseInt(this.state.num2)
                this.setState({ result: result })
                break;
            case "minus":
                this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
                break;
            case "times":
                this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
                break;
            case "divide":
                this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
                break;
            default:
                break;
        }
    }

    saveResult() {
        this.setState({ history: [...this.state.history, this.state.result] })
    }

    render() {
        return (
            <div className="app-container">
                <h3>Calculator</h3>
                <div className='calculator-container'>
                    <input className="num1 num1__input" type="number" value={this.state.num1} onChange={e => this.changeNumber(e)} />

                    <label htmlFor="operations"></label>
                    <select className="operations__select" id="operations" onChange={e => this.selectOperation(e)}>
                        <option defaultValue value="add">+</option>
                        <option value="minus">-</option>
                        <option value="times">*</option>
                        <option value="divide">/</option>
                    </select>

                    <input className="num2 num2__input" type="number" value={this.state.num2} onChange={e => this.changeNumber(e)} />
                    <span className="equal-mark__span">=</span>
                    <span className="result-number__span">{this.state.result}</span>
                    <button className='record-button' onClick={() => this.saveResult()}>Record</button>
                </div>
                <History history={this.state.history} />
            </div>
        )
    }
}

export default App;