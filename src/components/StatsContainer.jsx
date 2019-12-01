import React, { Component } from 'react'
import { RingChart } from "./RingChart"
export default class StatsContainer extends Component {
    render() {
        return (
            <div className="stats-container-root">
                <RingChart />
            </div>
        )
    }
}
