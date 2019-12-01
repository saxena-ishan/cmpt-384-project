import React, { Component } from 'react';

import { StatsContainer } from "../components"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMedalTally, setTopGames, updateYears } from '../redux/actions/actions'
import { json } from 'd3';

import ReactDOM from 'react-dom';
import OlympicTimeline from '../components/OlympicTimeline';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    componentDidMount() {
        const { actions } = this.props;

        json("/assets/data/MedalTally.json").then((response) => {
            actions.setMedalTally(response);
            actions.updateYears("1900", false);
        });

        json("/assets/data/TopGames.json").then((response) => {
            actions.setTopGames(response);
        });
    };

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

                <div className="page-title">
                    {/* <text className="boilerplate-div" style={titleStyle}>react-boilerplate</text> */}
                    <img src="assets/olympicRings.png"  style={imageStyle} alt="Olympic Rings" width="470" height="240"></img>
                </div>

                <div className="timeline-div" style={leftContainer}>
                    <div className="olympicTimeline">
                        {this.createEvent()}
                    </div>
                </div>

                <div className="stats-div" style={rightContainer}>
                    <StatsContainer />

                </div>


            </div>
        )

    }
}



document.getElementsByTagName("BODY")[0].onresize = function() {myFunction()};
var x = $(window).width() -60;

const titleStyle={
    position: 'relative',
    display: 'grid'
}
const imageStyle={
    position: 'relative',
    display: 'grid',
    left: x - (x/2) - 235 -15
}

const divStyle = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'red',
    height: 'auto'
}
var leftContainer = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'green',
    width: '80px',
    float: 'left',
    height: '100%'
}
var rightContainer = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'green',
    width: x - 80,
    float: 'right',
    height: '100%'
}

// // Trying to get the div width to update when window is resized
// function myFunction() {
//   x = $(window).width() -60;
//   rightContainer = {
//     border: '1px solid black',
//     outlineStyle: 'solid',
//     outlineColor: 'green',
//     width: x - 80,
//     float: 'right',
//     height: '100%'
// }
//   console.log(x)
// }

function mapStateToProps(state) {
    return {
        years: state.delta.years,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ setMedalTally, setTopGames, updateYears }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);;





