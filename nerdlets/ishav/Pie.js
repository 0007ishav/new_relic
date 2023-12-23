import React from 'react';
import { PieChart } from 'nr1';

export default class Pie extends React.Component {
    render() {
        const versionA = {
            metadata: {
                id: 'A',
                name: 'Version A',
                viz: 'main',
                color: 'red',
            },
            data: [
                { y: 150 },
            ],
        }
        const versionB = {
            metadata: {
                id: 'B',
                name: 'Version B',
                viz: 'main',
                color: 'violet',
            },
            data: [
                { y: 379 },
            ],
        }
        return <PieChart data={[versionA, versionB ]} fullWidth />
    }
}
