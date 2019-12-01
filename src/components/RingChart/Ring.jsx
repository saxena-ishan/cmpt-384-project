import React, { Component } from 'react';
import { updateRing } from "../../utils/updateRing";
import { connect } from 'react-redux';

class Ring extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            barTextHidden: false
        }
    }
    
    componentDidUpdate() {
        const { continent, year, data, singleMax } = this.props;
        updateRing(
            continent[1],
            year,
            data,
            singleMax, 
            15, 
            100,
            () => { this.setState({barTextHidden: true}); },
            () => { this.setState({barTextHidden: false}); }
        );
    }

    componentDidMount() {

        const { continent, year, data, singleMax } = this.props;

        updateRing(
            continent[1],
            year,
            data,
            singleMax, 
            15, 
            100,
            () => { this.setState({barTextHidden: true}); },
            () => { this.setState({barTextHidden: false}); }
        );
    }
    
    
    render() {

        const { radius = 100, strokeWidth = 15, color = "red", x = 10, y = 20, continent = "L", year } = this.props;
        const { barTextHidden } = this.state;
        return (
            <g className="ring-root" transform={`translate(${x},${y})`}>

                <circle
                 cx={radius} 
                 cy={radius} 
                 r={radius}
                 stroke={color}
                 strokeWidth={strokeWidth}
                >
                    <title>{continent[0]}</title>
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
                    <path className={`gold-bar ${continent[1]}-${year} male`}>
                        <title></title>
                    </path>
                    <text 
                     className={`gold-bar-text ${continent[1]}-${year} male`} 
                     id={`bar-text-${(barTextHidden? "hidden" : "visible")}`}
                     textAnchor="middle"
                    />
                    <path className={`silver-bar ${continent[1]}-${year} male`}>
                        <title></title>
                    </path>
                    <text className={`silver-bar-text ${continent[1]}-${year} male`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                    <path className={`bronze-bar ${continent[1]}-${year} male`}>
                        <title></title>
                    </path>
                    <text className={`bronze-bar-text ${continent[1]}-${year} male`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>

                    {/* Female Results */}
                    <path className={`gold-bar ${continent[1]}-${year} female`}>
                        <title></title>
                    </path>
                    <text className={`gold-bar-text ${continent[1]}-${year} female`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                    <path className={`silver-bar ${continent[1]}-${year} female`}>
                        <title></title>
                    </path>
                    <text className={`silver-bar-text ${continent[1]}-${year} female`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                    <path className={`bronze-bar ${continent[1]}-${year} female`}>
                        <title></title>
                    </path>
                    <text className={`bronze-bar-text ${continent[1]}-${year} female`} id={`bar-text-${(barTextHidden? "hidden" : "visible")}`} textAnchor="middle"/>
                </g>
            </g>
        )
    }
}

function mapStateToProps(state) {
    return {
        singleMax: state.delta.singleMax
    };
}


export default connect(mapStateToProps, null)(Ring);


