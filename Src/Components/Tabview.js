import React, {Component} from 'react';
import {View, TabHeading, Tab, Tabs, Image} from 'native-base';
import Tab1 from './MD_Pick_Tab/Tab1';
import Tab2 from './MD_Pick_Tab/Tab2';
import Tab3 from './MD_Pick_Tab/Tab3';
import Tab4 from './MD_Pick_Tab/Tab4';
import Tab5 from './MD_Pick_Tab/Tab5';

function MD_Pick_Tab(props) {
  return (
    <View style={{marginBottom: -200, height: 1050}}>
      <Tabs
        initialPage={1}
        tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
        style={{
          marginTop: 16,
        }}>
        <Tab
          activeTabStyle={{
            backgroundColor: 'white',
            height: '70%',
            borderRadius: 20,
            top: '15%',
          }}
          activeTextStyle={{color: 'red'}}
          heading="1">
          <Tab1 />
        </Tab>
        <Tab
          activeTabStyle={{
            backgroundColor: 'white',
            height: '70%',
            borderRadius: 20,
            top: '15%',
          }}
          activeTextStyle={{color: 'red'}}
          heading="2">
          <Tab2 />
        </Tab>
        <Tab
          activeTabStyle={{
            backgroundColor: 'white',
            height: '70%',
            borderRadius: 20,
            top: '15%',
          }}
          activeTextStyle={{color: 'red'}}
          heading="3">
          <Tab3 />
        </Tab>
        <Tab
          activeTabStyle={{
            backgroundColor: 'white',
            height: '70%',
            borderRadius: 20,
            top: '15%',
          }}
          activeTextStyle={{color: 'red'}}
          heading="4">
          <Tab4 />
        </Tab>
        <Tab
          activeTabStyle={{
            backgroundColor: 'white',
            height: '70%',
            borderRadius: 20,
            top: '15%',
          }}
          activeTextStyle={{color: 'red'}}
          heading="5">
          <Tab5 />
        </Tab>
      </Tabs>
    </View>
  );
}

export default MD_Pick_Tab;
