import React from 'react';
import { Hooks } from './Hooks';
import { BillboardChart } from 'nr1';
// import App from './App';
import Bar from './Bar';
import VersionPageViews from './PageViews';
import { ChartGroup } from 'nr1';
import Pie from './Pie';
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class IshavNerdlet extends React.Component {
  render() {
    return (
      <>
        <Bar />
        <BillboardChart
        accountIds={[4267260]}
        query="SELECT count(*) FROM Public_APICall "
        />
        <Hooks/>
        {/* <App/> */}
        <Pie/>
        <ChartGroup>
          <VersionPageViews version='one'/>
          <VersionPageViews version='two'/>
        </ChartGroup>
      </>
      )
  }
}
