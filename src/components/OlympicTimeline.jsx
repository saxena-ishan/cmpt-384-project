import React, { Component } from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
} from '@merc/react-timeline';


export default class OlympicTimeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    MyCustomMarker = () => <span onClick={(() => this.testButton())}>😀</span>;

    testButton() {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        const { year } = this.props;
        return (
            <div>

                <Timeline>
                    <Events>

                        {
                            this.state.isOpen ?
                                <TextEvent date={year} text="**Markdown** is *supported*" marker={() => this.MyCustomMarker()}></TextEvent>
                                :
                                <TextEvent date={year} text="" marker={() => this.MyCustomMarker()}></TextEvent>

                        }

                    </Events>
                </Timeline> : <div></div>

            </div>

        );
    }
}
