/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OlympicTimeline from '../components/OlympicTimeline';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    createEvent = () => {
        let array = [1980, 1990, 2000, 2010]
        let eventList = []

        array.forEach(element => {
            eventList.push(<OlympicTimeline key={`${element}`} year={`${element}`} />)
        });

        return eventList;
    }



    render() {
        return (
            <div style={divStyle}>
                <div className="boilerplate-div">react-boilerplate</div>

                <div style={leftContainer}>
                    <div className="olympicTimeline">
                        {this.createEvent()}
                    </div>
                </div>

                <div style={rightContainer}></div>


            </div>
        )
    }
}


const divStyle = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'red',
    height: '100px'
}
const leftContainer = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'green',
    width: '80px',
    float: 'left',
    height: '100%'
}
const rightContainer = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'green',
    width: '85%',
    float: 'right',
    height: '100%'
}