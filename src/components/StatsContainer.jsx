import React, { Component } from 'react'
import { RingChart } from "./RingChart"

export default class StatsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {currentYear: "XXXX"}
    }

    // setting the state of current year will update the inner-label
    setYear(y){
        this.setState({ currentYear: y })
    }

    render() {
        return (
            <div className="stats-container-root">
                <div style={containerHeading} className="boilerplate-div">{this.state.currentYear}</div>

                <RingChart />
            </div>
        )
    }
}

const containerHeading = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'blue',
    width: 'auto',
    float: 'left',
    transform: 'translate(0px, 200px) rotate(-90deg)',
}