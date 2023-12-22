import React from 'react';
import { Hooks } from './Hooks';
import { BarChart } from 'nr1'
import { BillboardChart } from 'nr1'
import App from './App';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class IshavNerdlet extends React.Component {
  render() {
    return (
      <>
        <BarChart
         accountIds={[4267260]}
          query="SELECT count(*) FROM Public_APICall "
        />
        <BillboardChart
        accountIds={[4267260]}
        query="SELECT count(*) FROM Public_APICall "
        />
        <Hooks/>
        {/* <App/> */}
      </>
      )
  }
}
