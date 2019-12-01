import React, { Component } from 'react';
import { StatsContainer } from "../components"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMedalTally, setTopGames, updateYears } from '../redux/actions/actions'
import { json } from 'd3';

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
    

    render() {
        return (
            <StatsContainer />
        )
    }
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





