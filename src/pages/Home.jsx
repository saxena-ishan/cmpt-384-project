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
                <div className="boilerplate-div">react-boilerplate</div>

                <div style={leftContainer}>
                    <div className="olympicTimeline">
                        {this.createEvent()}
                    </div>
                </div>

                <div style={rightContainer}>
                    <StatsContainer />

                </div>


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





