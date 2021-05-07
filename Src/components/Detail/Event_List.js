import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail, Tab, Tabs } from 'native-base';

import Footer_Component from '../Footer_Component'

function Event_List(){
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
            <Left>
            <Button transparent>
              <Icon style={{color:'black'}} name='arrow-back' />
            </Button>
            </Left>
            <Body>
                <Title style={{color:'black', fontWeight:'bold'}}>이벤트 상세</Title>
            </Body>
            <Right style={{flexDirection:'row'}}>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}} />
                <Thumbnail style={{height:40, resizeMode:'contain', marginLeft:-10}} source={{uri: "https://i.postimg.cc/Prprv05j/i-basket.png"}} />
            </Right>
        </Header>

{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
               
        <Content>
           <View>
              <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/banner02.png')}/>
              <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/banner02.png')}/>
              <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/banner02.png')}/>
              <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/banner02.png')}/>
          </View>
        </Content>


{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Footer style={{height:80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }

  export default Event_List;