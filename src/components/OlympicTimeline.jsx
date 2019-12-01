import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateYears } from '../redux/actions/actions'
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
} from '../timeline';


class OlympicTimeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    CustomOpenMarker = (y) => <span style={dotStyle} onClick={(() => this.testButton(y))}>⚫</span>;
    CustomCloseMarker = (y) => <span style={dotStyle} onClick={(() => this.testButton(y))}>✖</span>;

    testButton(year) {
        this.setState({ isSelected: !this.state.isSelected })

        this.props.actions.updateYears(''+year, this.state.isSelected);

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
                                <TextEvent date={year} text="" marker={() => this.CustomCloseMarker(year)}></TextEvent>
                                :
                                <TextEvent date={year} text="" marker={() => this.CustomOpenMarker(year)}></TextEvent>
                        }

                    </Events>
                </Timeline>

            </div>


        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ updateYears }, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(OlympicTimeline);;


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
