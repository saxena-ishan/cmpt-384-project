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
    }



    render() {
        const { year } = this.props;
        return (
            <Timeline>
                <Events>
                    <TextEvent date={year} text="**Markdown** is *supported*">
                        <div>
                            Hi
                        </div>
                    </TextEvent>
                </Events>
            </Timeline>
        );
    }
}
