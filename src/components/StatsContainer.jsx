import React, { Component } from 'react'
import { RingChart } from "./RingChart"
import { TopGames } from "./TopGames"

export default class StatsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { year, data } = this.props;
        return (
            <div className="stats-container-root">
                <div style={containerHeading} className="edition-tag-container">{year}</div>
                
                <div>
                    <RingChart year={year} data={data}/>
                </div>
            </div>
        )
    }
}

const containerHeading = {
    // border: '1px solid black',
    // outlineStyle: 'solid',
    // outlineColor: 'blue',
    width: 'auto',
    float: 'left',
    transform: 'translate(0px, 200px) rotate(-90deg)',
}