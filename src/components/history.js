import React from "react";

import "./history.css"
export default class History extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="history-container">
                <hr />
                <h4>Recorded Numbers</h4>
                <ul>
                    {this.props.history.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>

            </div>
        )
    }
}