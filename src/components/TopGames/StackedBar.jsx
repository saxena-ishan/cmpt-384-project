import React, { Component } from 'react'
import * as d3 from 'd3';
export default class StackedBar extends Component {

    componentDidMount() {

    }

    render() {
        var testObj = {
            "Wrestling Gre-R": {
                "males": {
                    "B": 1,
                    "S": 1,
                    "G": 1
                },
                "females": {
                    "B": 0,
                    "S": 0,
                    "G": 0
                },
                "total": 3,
                "max": 1
            }
        }
        const { width } = this.props;
        return (
            <g className="stacked-bar-group">
                {/* <rect className={`gold-stacked-bar ${continent[1]}-${year}-${sport} male`}></rect>                
                <text className={`gold-stacked-bar-text ${continent[1]}-${year}-${sport} male`}></text>
                <rect className={`bronze-stacked-bar ${continent[1]}-${year}-${sport} male`}></rect>                
                <text className={`bronze-stacked-bar-text ${continent[1]}-${year}-${sport} male`}></text>
                <rect className={`silver-stacked-bar ${continent[1]}-${year}-${sport} male`}></rect>                
                <text className={`silver-stacked-bar-text ${continent[1]}-${year}-${sport} male`}></text>

                <text></text>

                <rect className={`gold-stacked-bar ${continent[1]}-${year}-${sport} female`}></rect>                
                <text className={`gold-stacked-bar-text ${continent[1]}-${year}-${sport} female`}></text>
                <rect className={`bronze-stacked-bar ${continent[1]}-${year}-${sport} female`}></rect>                
                <text className={`bronze-stacked-bar-text ${continent[1]}-${year}-${sport} female`}></text>
                <rect className={`silver-stacked-bar ${continent[1]}-${year}-${sport} female`}></rect>                
                <text className={`silver-stacked-bar-text ${continent[1]}-${year}-${sport} female`}></text> */}
            </g>
        )
    }
}

function generateStack() {

}