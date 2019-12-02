import React, { Component } from 'react'
import StackedBar from "./StackedBar"

export class TopGames extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        const { radius = 100, innerGap = 50, width = 510, height = 450} = this.props;

        // var colors = ["blue", "black", "red", "yellow", "green"]
        // var initialXUpper =  (width - ((3 * (radius * 2)) + (innerGap * 2))) / 2;
        // var initialXLower =  (width - ((2 * (radius * 2)) + (innerGap * 1))) / 2; 

        // var initialY =  (height - (2 * (radius * 2))) / 2;
        return (
            <svg className="ring-container" width={width} height={height}>
                <StackedBar width={width}/>
                {/* {
                    colors.map((c, i) => {
                        if (i < 3) {
                            let x = initialXUpper + (i * ((radius * 2) + innerGap));
                            return (
                                <Ring
                                 radius={radius}
                                 color={c}
                                 x={x}
                                 y={initialY}
                                 key={i}
                                 continent={c}
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
                                 continent={c}
                                />
                            )
                        }
                    })
                } */}
            </svg>
        )
    }
}