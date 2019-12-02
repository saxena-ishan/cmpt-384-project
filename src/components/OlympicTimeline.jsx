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
            isSelected: false,
            curYear: '0'
        }
        this.clickHandle = this.clickHandle.bind(this);
    }

    componentDidMount() {
        const { year } = this.props;
        this.setState({curYear: year})
        
    }

    clickHandle() {
        this.setState({isSelected: !this.state.isSelected})

        this.props.actions.updateYears(''+this.state.curYear, this.state.isSelected);
        // console.log("Is selected = " + this.state.isSelected + " : " + this.state.curYear)
    }

    CustomOpenMarker = () => <span style={dotStyle} >⚫</span>;
    CustomCloseMarker = () => <span style={dotStyle} >✖</span>;

    render() {

        return (
            <div className="individualTimeline" style={timelineDivStyle} 
            onClick={this.clickHandle}>


                <Timeline>
                    <Events>
                        {
                            this.state.isSelected ?
                                <TextEvent style={buttonStyle} date={this.state.curYear} text="" marker={() => this.CustomCloseMarker()}></TextEvent>
                                :
                                <TextEvent style={buttonStyle} date={this.state.curYear} text="" marker={() => this.CustomOpenMarker()}></TextEvent>
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


const buttonStyle = {
    border: '4px solid black',
    borderColor: '#893011'
}
const dotStyle = {
    position: 'absolute',
    left: '45px',
    cursor: "pointer",
    userSelect: "none"
}
const timelineDivStyle = {
    // border: '1px solid black',
    // outlineStyle: 'solid',
    // outlineColor: 'blue',
    width: '90px',
    float: 'left',
    height: '100%'
}
