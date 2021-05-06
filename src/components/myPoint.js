import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail, Tab, Tabs } from 'native-base';

import Tab1 from './tabOne';
import Tab2 from './tabTwo';


function myPoint(props){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
            <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
            </Left>
            <Body><Title>my point</Title></Body>
            <Right style={{flexDirection:'row'}}>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}} />
                <Thumbnail style={{height:40, resizeMode:'contain', marginLeft:-10}} source={{uri: "https://i.postimg.cc/Prprv05j/i-basket.png"}} />
            </Right>
        </Header>

{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
               
        <Content>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20, paddingBottom:50}}>
                <View>
                    <Text>내 전자화폐</Text>
                    <Text>130,000T</Text>
                </View>
                    <TouchableOpacity>
                        <Text style={{padding:10, paddingLeft:35, paddingRight:35, backgroundColor:'grey', color:'white'}}>충전하기</Text>
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
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button onPress={()=> props.navigation.openDrawer('Category')}>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon01.png')} />
              <Text style={{fontSize:9}}>CATEGORY  </Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon02.png')} />
              <Text style={{fontSize:9}}>Camera</Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon03.png')} />
              <Text style={{fontSize:9}}>Search</Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon04.png')} />
              <Text style={{fontSize:9}}>Contact</Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon05.png')} />
              <Text style={{fontSize:9}}>MY</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  export default myPoint;