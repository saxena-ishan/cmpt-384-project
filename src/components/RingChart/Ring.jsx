import React, { Component } from 'react';
import { updateRing } from "../../utils/updateRing";

export default class Ring extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            barTextHidden: true
        }
    }
    componentDidUpdate() {
    }

    componentDidMount() {

        const start = () => { this.setState({barTextHidden: true}); }
        const end = () => { this.setState({barTextHidden: false}); }

        updateRing(this.props.continent, 15, 100, start, end);
    }
    
    
    render() {

        const { radius = 100, strokeWidth = 15, color = "red", x = 10, y = 20, continent = "L" } = this.props;
        const { barTextHidden } = this.state;
        return (
            <g className="ring-root" transform={`translate(${x},${y})`}>

                <circle
                 cx={radius} 
                 cy={radius} 
                 r={radius}
                 stroke={color}
                 strokeWidth={strokeWidth}
                 title={continent}
                >
                    <title>{continent}</title>
                </circle>

                <g className="ring-axis-elements">
                    <line 
                     x1={strokeWidth}
                     y1={radius}
                     x2={(radius * 2) - strokeWidth}
                     y2={radius}
                    />
                    
                    <text 
                     x={strokeWidth}
                     y={radius - 2} 
                     textAnchor="start"
                    >M</text>
                    
                    <text 
                     x={(radius * 2) - strokeWidth} 
                     y={radius + 12}
                     textAnchor="end"
                    >F</text>
                </g>
                
                <g className="ring-bars">
                    {/* Male Results */}
                    <path className={`gold-bar ${continent} male`}>
                        <title></title>
                    </path>
                    <text 
                     className={`gold-bar-text ${continent} male`} 
                     id={`bar-text-${(barTextHidden? "hidden" : "visible")}`}
                     textAnchor="middle"
                    />
                    <path className={`silver-bar ${continent} male`}>
                        <title></title>
                    </path>
                    <text className={`silver-bar-text ${continent} male`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                    <path className={`bronze-bar ${continent} male`}>
                        <title></title>
                    </path>
                    <text className={`bronze-bar-text ${continent} male`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>

                    {/* Female Results */}
                    <path className={`gold-bar ${continent} female`}>
                        <title></title>
                    </path>
                    <text className={`gold-bar-text ${continent} female`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                    <path className={`silver-bar ${continent} female`}>
                        <title></title>
                    </path>
                    <text className={`silver-bar-text ${continent} female`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                    <path className={`bronze-bar ${continent} female`}>
                        <title></title>
                    </path>
                    <text className={`bronze-bar-text ${continent} female`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                </g>
            </g>
        )
    }
}




