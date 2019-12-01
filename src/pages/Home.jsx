import React, { Component } from 'react';
import { StatsContainer } from "../components"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMedalTally, setTopGames, updateYears } from '../redux/actions/actions'
import { json } from 'd3';

import OlympicTimeline from '../components/OlympicTimeline';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { actions } = this.props;

        json("/assets/data/MedalTally.json").then((response) => {
            actions.setMedalTally(response);
        });

        json("/assets/data/TopGames.json").then((response) => {
            actions.setTopGames(response);
        });
    };

    createEvent = () => {

        const { globalYears } = this.props;

        var eventList = [];

        globalYears.forEach(element => {
            eventList.push(<OlympicTimeline key={`${element}`} year={`${element}`} />)
        });

        return eventList;
    }

    render() {

        const { years } = this.props;

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
                    {
                        years.map((y, i) => {
                          return (<StatsContainer year={y} key={i}/>);
                        })
                    }
                </div>
            </div>
        )

    }
}



var windowWidth = $(window).width() -60;
var windowHeight = $(window).height() -250;

const titleStyle={
    position: 'relative',
    display: 'grid'
}
const imageStyle={
    position: 'relative',
    display: 'grid',
    left: windowWidth - (windowWidth/2) - 235 -15
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
    width: '100px',
    float: 'left',
    height: windowHeight,
    overflowY: 'scroll'
}
var rightContainer = {
    border: '1px solid black',
    outlineStyle: 'solid',
    outlineColor: 'green',
    width: windowWidth - 80,
    float: 'right',
    height: '100%'
}

// // Trying to get the div width to update when window is resized
// document.getElementsByTagName("BODY")[0].onresize = function() {myFunction()};
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
        globalYears: state.delta.globalYears
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ setMedalTally, setTopGames, updateYears }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);;