/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OlympicTimeline from '../components/OlympicTimeline';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    createEvent = () => {
        let array = [2000, 2010]
        let eventList = []

        array.forEach(element => {
            eventList.push(<OlympicTimeline key={`${element}`} year={`${element}`} />)
        });

        return eventList;
    }



    render() {
        return (
            <div>
                <div className="boilerplate-div">react-boilerplate</div>
                <div className="olympicTimeline">
                    {this.createEvent()}
                </div>
            </div>
        )
    }
}



// const OlympicTimelineStyle = {
//     width: '50%',
//     border: '3px solid green',
//     padding: '10px',
//     right: '250px'
// }