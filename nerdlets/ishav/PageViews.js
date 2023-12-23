import React from "react";
import { LineChart } from "nr1";

export default class VersionPageViews extends React.Component {
    render() {
        const versionPageViews = {
            metadata : {
                id: `PageView-${this.props.version}`,
                name: `Version ${this.props.version}`,
                viz: 'main',
                color: 'red',
                units_data: {
                    y:'ms'
                }
            },
            data: [
                {x: 0, y: 22},
                {x: 10, y: 41},
                {x: 17, y: 3},
                {x: 25, y: 45},
                {x: 44, y: 78},
            ]
        }
        return <LineChart data={[versionPageViews]} fullWidth />
    }
}