import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Title,
  Right,
  View,
  Thumbnail,
  Tab,
  Tabs,
} from 'native-base';
import Tab1 from './MD_Pick_Tab/Tab1';
import Tab2 from './MD_Pick_Tab/Tab2';
import Tab3 from './MD_Pick_Tab/Tab3';
import Tab4 from './MD_Pick_Tab/Tab4';
import Tab5 from './MD_Pick_Tab/Tab5';
import {color} from 'react-native-reanimated';

function MD_Pick_Tab(props) {
  return (
    <View style={{marginBottom: -200, height: 1050}}>
      <Tabs tabBarUnderlineStyle={{backgroundColor: 'red'}}>
        <Tab
          backgroundImage="url('../images/common/md_pick_bg.png')"
          tabStyle={{backgroundColor: 'red'}}
          activeTabStyle={{backgroundColor: 'red'}}
          backgroundImage={require('../images/common/md_pick_bg.png')}
          heading="img">
          <Tab1 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: 'transparent'}}
          activeTabStyle={{backgroundColor: 'transparent'}}
          heading="2">
          <Tab2 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: 'transparent'}}
          activeTabStyle={{backgroundColor: 'transparent'}}
          heading="3">
          <Tab3 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: 'transparent'}}
          activeTabStyle={{backgroundColor: 'transparent'}}
          heading="4">
          <Tab4 />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: 'transparent'}}
          activeTabStyle={{backgroundColor: 'transparent'}}
          heading="5">
          <Tab5 />
        </Tab>
      </Tabs>
    </View>
  );
}

export default MD_Pick_Tab;
