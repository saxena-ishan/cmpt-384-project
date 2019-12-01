import React, { Component } from 'react'
import { RingChart } from "./RingChart"
import { TopGames } from "./TopGames"

export default class StatsContainer extends Component {
    render() {
        return (
            <div className="stats-container-root">
                <RingChart />
                <TopGames />
            </div>
        )
    }
}
