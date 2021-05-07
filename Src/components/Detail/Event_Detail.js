import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail, Tab, Tabs } from 'native-base';

import Footer_Component from '../Footer_Component'

function Event_Detail(props){
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
             <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:-50}}>
               <View style={{marginLeft:16}}>
                 <Text note>2020.04.03~2020.05.01</Text>
                 <Text style={{fontSize:20}}>2020 S/S BEST 쥬얼리 모음</Text>
                 <Text>기획전에 대한 설명을 적으세요</Text>
               </View>

               <TouchableOpacity onPress={() =>{ props.navigation.navigate('Event_List'); }}>
               <View style={{marginRight:16}}>
                <Image style={{width:66 ,resizeMode:'contain'}} source={require('../../images/content/btn_exhibition_list.png')} />
               </View>
               </TouchableOpacity>
             </View>

             <View style={{backgroundColor:'#E3E3E3', padding:'60%', marginTop:-50}}></View>
          </View>
        </Content>


{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Footer style={{height:80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }

  export default Event_Detail;