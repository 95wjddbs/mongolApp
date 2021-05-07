import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail, Tab, Tabs } from 'native-base';

import Footer_Component from '../Footer_Component'


function Detail1(props){
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
            <Left>
            <Button transparent>
              <Icon style={{color:'black'}} name='arrow-back' />
            </Button>
            </Left>
            <Body>
                <Title style={{color:'black', fontWeight:'bold'}}>기획전 상세</Title>
            </Body>
            <Right style={{flexDirection:'row'}}>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}} />
                <Thumbnail style={{height:40, resizeMode:'contain', marginLeft:-10}} source={{uri: "https://i.postimg.cc/Prprv05j/i-basket.png"}} />
            </Right>
        </Header>

{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
               
        <Content>
            <View style={{marginTop:30, alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:20}}>Planning Exhibition</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-180}}>
                <View style={{flexDirection:'column'}}>
                    <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/pe_3.png')} />
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:-200}}>O HUI Purchase Apprec...</Text>
                    <Text style={{fontSize:13}}>Free gift random (Until sold out)</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/pe_1.png')} />
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:-200}}>airvita Purchase Appre.....</Text>
                    <Text style={{fontSize:13}}>Free gift random (Until sold out)</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-180}}>
                <View style={{flexDirection:'column'}}>
                    <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/pe_3.png')} />
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:-200}}>O HUI Purchase Apprec...</Text>
                    <Text style={{fontSize:13}}>Free gift random (Until sold out)</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <Image style={{resizeMode:'contain', width:'100%'}} source={require('../../images/test_img/pe_1.png')} />
                    <Text style={{fontSize:14, fontWeight:'bold', marginTop:-200}}>airvita Purchase Appre.....</Text>
                    <Text style={{fontSize:13}}>Free gift random (Until sold out)</Text>
                </View>
            </View>
        </Content>


{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Footer style={{height:80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }

  export default Detail1;