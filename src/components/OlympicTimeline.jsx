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
            isOpen: true
        }
    }

    CustomOpenMarker = () => <span style={dotStyle} onClick={(() => this.testButton())}>⚫</span>;
    CustomCloseMarker = () => <span style={dotStyle} onClick={(() => this.testButton())}>✖</span>;

    testButton() {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        const { year } = this.props;
        return (
            <div style={timelineDivStyle}>

                <Timeline>
                    <Events>
                        {
                            this.state.isOpen ?
                                <TextEvent date={year} text="" marker={() => this.CustomOpenMarker()}></TextEvent>
                                :
                                <TextEvent date={year} text="" marker={() => this.CustomCloseMarker()}></TextEvent>
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
