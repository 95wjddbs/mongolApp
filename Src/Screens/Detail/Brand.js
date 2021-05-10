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
  Text,
  Left,
  Body,
  Title,
  Right,
  View,
  Thumbnail,
  Tab,
  Tabs,
  List,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import Footer_Component from '../../Components/Footer_Component';

function Brand(props) {
  return (
    <Container>
      <Header style={{backgroundColor: 'white'}}>
        <Left>
          <Button transparent>
            <Icon style={{color: 'black'}} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black', fontWeight: 'bold'}}>브랜드</Title>
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
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('brandDetail');
            }}>
            <View
              style={{
                backgroundColor: '#E3E3E3',
                padding: '40%',
                marginTop: -50,
              }}></View>
          </TouchableOpacity>

          <List>
            <ListItem selected>
              <Left>
                <Text>KOHLER.</Text>
              </Left>
              <Body>
                <Text>Burberry fragrances</Text>
              </Body>
              <Right>
                <Icon style={{color: 'black'}} name="chevron-forward" />
              </Right>
            </ListItem>
          </List>
        </View>
      </Content>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}

export default Brand;
