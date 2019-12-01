import React, { Component } from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
} from '../timeline';


export default class OlympicTimeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: true
        }
    }

    CustomOpenMarker = (y) => <span style={dotStyle} onClick={(() => this.testButton(y))}>⚫</span>;
    CustomCloseMarker = (y) => <span style={dotStyle} onClick={(() => this.testButton(y))}>✖</span>;

    testButton(year) {
        this.setState({ isSelected: !this.state.isSelected })
        console.log("Is selected = " + this.state.isSelected + " : " + year)
    }

    render() {
        const { year } = this.props;
        return (
            <div style={timelineDivStyle}>

                <Timeline>
                    <Events>
                        {
                            this.state.isSelected ?
                                <TextEvent date={year} text="" marker={() => this.CustomOpenMarker(year)}></TextEvent>
                                :
                                <TextEvent date={year} text="" marker={() => this.CustomCloseMarker(year)}></TextEvent>
                        }

                    </Events>
                </Timeline>

            </div>


        );
    }
}
const dotStyle = {
    position: 'absolute',
    left: '45px'
}
const timelineDivStyle = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'blue',
    width: '80px',
    float: 'left',
    height: '100%'
}
