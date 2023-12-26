import React from 'react'
import { BarChart } from 'nr1'

export default class CustomBarChart  extends React.Component {
     render() {
        const data = [
          {
            metadata: {
              id: 'Bar-1',
              name: 'Bar 1',
              color: '#a35ebf',
              viz: 'main',
              units_data: {
                y: 'BYTES',
              },
            },
            data: [{ y: 200 }],
          },
          {
            metadata: {
              id: 'Bar-2',
              name: 'Bar 2',
              color: '#85c956',
              viz: 'main',
              units_data: {
                y: 'BYTES',
              },
            },
            data: [{ y: 256 }],
          },
          {
            metadata: {
              id: 'Bar-3',
              name: 'Bar 3',
              color: '#f86e40',
              viz: 'main',
              units_data: {
                y: 'BYTES',
              },
            },
            data: [{ y: 300 }],
          },
          {
            metadata: {
              id: 'Bar-4',
              name: 'Bar 4',
              color: '#c21684',
              viz: 'main',
              units_data: {
                y: 'BYTES',
              },
            },
            data: [{ y: 170 }],
          },
          {
            metadata: {
              id: 'Bar-5',
              name: 'Bar 5',
              color: '#51c9b7',
              viz: 'main',
              units_data: {
                y: 'BYTES',
              },
            },
            data: [{ y: 450 }],
          },
          {
            metadata: {
              id: 'Bar-6',
              name: 'Bar 6',
              color: '#48d2f0',
              viz: 'main',
              units_data: {
                y: 'BYTES',
              },
            },
            data: [{ y: 141 }],
          },
        ];
      
        // return <BarChart data={data} fullHeight fullWidth/>;
        return <BarChart data={data}  fullWidth/>;
      }
}