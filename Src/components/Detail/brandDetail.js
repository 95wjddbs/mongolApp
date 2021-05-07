import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail, Tab, Tabs, Card, CardItem } from 'native-base';

import Footer_Component from '../Footer_Component'


function brandDetail(props){
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
            <Left>
            <Button transparent>
              <Icon style={{color:'black'}} name='arrow-back' />
            </Button>
            </Left>
            <Body>
                <Title style={{color:'black', fontWeight:'bold'}}>adidas Young Athletes</Title>
            </Body>
            <Right style={{flexDirection:'row'}}>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}} />
                <Thumbnail style={{height:40, resizeMode:'contain', marginLeft:-10}} source={{uri: "https://i.postimg.cc/Prprv05j/i-basket.png"}} />
            </Right>
        </Header>

{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
               
        <Content>
           <View>
                <Card>
                    <CardItem>
                    <Left>
                        <Body>
                        <Text>탭 들어갈 자리</Text>
                        </Body>
                    </Left>
                    </CardItem>

                    <CardItem cardBody>
                        <View style={{backgroundColor:'#E3E3E3', padding:'50%'}}></View>
                    </CardItem>

                    <CardItem>
                        <Left style={{flexDirection:'row',alignItems:'center', marginTop:-120, marginBottom:-120}}>
                            <Image style={{width:'20%', resizeMode:'contain', marginLeft:20}} source={require('../../images/test_img/br_3.png')}/>
                            <Text style={{fontSize:20, marginLeft:20}}>adidas Young Athletes</Text>
                        </Left>
                    </CardItem>
                </Card>

                <TouchableOpacity onPress={() =>{ props.navigation.navigate('productDetail1'); }}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-220, marginBottom:-220}}>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../../images/test_img/re_1.png')}/>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../../images/test_img/re_2.png')}/>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-220, marginBottom:-220}}>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../../images/test_img/re_3.png')}/>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../../images/test_img/re_4.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        </Content>


{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Footer style={{height:80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }

  export default brandDetail;