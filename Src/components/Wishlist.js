import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationActions} from 'react-navigation';
import MenuDrawer from 'react-native-side-drawer'
import Footer_Component from './Footer_Component'

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

function Wishlist(props){
    return (
      <Container style={{flex:1, backgroundColor:'white'}}>
        <Header style={{backgroundColor:'white'}}>
            <Left>
            <Button transparent>
              <Icon style={{color:'black'}} name='arrow-back' />
            </Button>
            </Left>
            <Body>
                <Title style={{color:'black', fontWeight:'bold'}}>위시리스트</Title>
            </Body>
            <Right style={{flexDirection:'row'}}>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}} />
                <Thumbnail style={{height:40, resizeMode:'contain', marginLeft:-10}} source={{uri: "https://i.postimg.cc/Prprv05j/i-basket.png"}} />
            </Right>
        </Header>

{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
               
        <Content style={{flex:1}}>
        </Content>


{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Footer style={{height:80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }

export default Wishlist;