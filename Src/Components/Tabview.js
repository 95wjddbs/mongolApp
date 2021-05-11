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

function MD_Pick_Tab(props) {
  return (
    <View style={{marginBottom: -200, height: 1050}}>
      <Tabs
        style={{
          marginTop: 30,
          backgroundColor: 'white',
        }}>
        <Tab style={{}} heading="1">
          <Tab1 />
        </Tab>
        <Tab heading="2">
          <Tab2 />
        </Tab>
        <Tab heading="3">
          <Tab3 />
        </Tab>
        <Tab heading="4">
          <Tab4 />
        </Tab>
        <Tab heading="5">
          <Tab5 />
        </Tab>
      </Tabs>
    </View>
  );
}

export default MD_Pick_Tab;
