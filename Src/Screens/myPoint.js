import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
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

import Footer_Component from '../Components/Footer_Component';

import Tab1 from './tabOne';
import Tab2 from './tabTwo';

function myPoint(props) {
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
  return (
    <Container>
      <Header style={{backgroundColor: 'white'}}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>my point</Title>
        </Body>
        <Right style={{flexDirection: 'row'}}>
          <Thumbnail
            style={{height: 35, resizeMode: 'contain'}}
            source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
          />
          <Thumbnail
            style={{height: 40, resizeMode: 'contain', marginLeft: -10}}
            source={{uri: 'https://i.postimg.cc/Prprv05j/i-basket.png'}}
          />
        </Right>
      </Header>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

      <Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            paddingBottom: 50,
          }}>
          <View>
            <Text>내 전자화폐</Text>
            <Text>130,000T</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                padding: 10,
                paddingLeft: 35,
                paddingRight: 35,
                backgroundColor: 'grey',
                color: 'white',
              }}>
              충전하기
            </Text>
          </TouchableOpacity>
        </View>

        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
        </Tabs>
      </Content>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}

export default myPoint;
