import React, { Component } from 'react';
import { StatsContainer } from "../components"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMedalTally, setTopGames, updateYears } from '../redux/actions/actions'
import { json } from 'd3';
import { Scrollbars } from 'react-custom-scrollbars';

import OlympicTimeline from '../components/OlympicTimeline';

let backgroundStyle = { background: 'url(assets/img/olympicRings.png)', backgroundSize: '100%', backgroundRepeat: "no-repeat" };  

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { actions } = this.props;

        json("./assets/data/MedalTally.json").then((response) => {
            actions.setMedalTally(response);
            
        });

        
        json("./assets/data/TopGames.json").then((response) => {
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

        const { years, medalTally } = this.props;

        return (

            <div className="page-root">

                <div className="page-title">
                    <div className="page-title-logo" style={backgroundStyle}></div>
                    <div className="page-title-text">{`Olympic Data Visualization`}</div>
                </div>

                <div className="page-main">
                    <div className="scrollStyle">
                        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                            <div className="timeline-div left-container" >
                            <div className="olympicTimeline">
                                {this.createEvent()}
                            </div>
                        </div>
                        </CustomScrollbars>
                    </div>

                    {<div className="stats-div right-container">
                        {years.length === 0 && <div className="child"></div>}
                        { 
                            years.map((y, i) => {
                                return (<StatsContainer year={y} key={i} data={medalTally[y]}/>);
                            })
                        }
                    </div>}
                </div>
            </div>
        )
    }
}


const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#bc451b'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  
  const CustomScrollbars = props => (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );

function mapStateToProps(state) {
    return {
        years: state.delta.years,
        globalYears: state.delta.globalYears,
        medalTally: state.delta.medalTally
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ setMedalTally, setTopGames, updateYears }, dispatch)
    };
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);