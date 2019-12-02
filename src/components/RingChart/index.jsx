import React, { Component } from 'react'
import Ring from "./Ring"
import { connect } from 'react-redux';


export class RingChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             
        }
    }
    
    render() {

        const { radius = 100, innerGap = 50, width = 750, height = 450, year = 1900, data} = this.props;

        var continents = {
            "blue": ["Europe", "EU"], 
            "black": ["Africa", "AF"], 
            "red": ["Americas", "AM"], 
            "yellow": ["Asia", "AS"], 
            "green": ["Oceania", "OC"] 
        };


        var initialXUpper =  (width - ((3 * (radius * 2)) + (innerGap * 2))) / 2;
        var initialXLower =  (width - ((2 * (radius * 2)) + (innerGap * 1))) / 2; 
        var initialY =  (height - (2 * (radius * 2))) / 2;
        return (
            <svg className="ring-container" width={width} height={height}>
                {
                    Object.keys(continents).map((c, i) => {
                        if (i < 3) {
                            let x = initialXUpper + (i * ((radius * 2) + innerGap));
                            return (
                                <Ring
                                 radius={radius}
                                 color={c}
                                 x={x}
                                 y={initialY}
                                 key={i}
                                 continent={continents[c]}
                                 year={year}
                                 data={data["continents"][continents[c][1]]}
                                />
                            )
                        }
                        else {
                            let x = initialXLower + ((i - 3) * ((radius * 2) + innerGap));
                            return (
                                <Ring
                                 radius={radius}
                                 color={c}
                                 x={x}
                                 y={initialY + (radius * 2)}
                                 key={i}
                                 continent={continents[c]}
                                 year={year}
                                 data={data["continents"][continents[c][1]]}
                                />
                            )
                        }
                    })
                }
            </svg>
        )
    }
}
