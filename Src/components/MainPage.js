import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail } from 'native-base';

import Footer_Component from './Footer_Component'

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

function MainPage(props){
    return (
      <Container style={{flex:1, backgroundColor:'white'}}>
        <Header style={{backgroundColor:'white', alignItems:'center'}}>
            <Left style={{flexDirection:'row'}}>
                <Image style={{width:150, resizeMode:'contain'}}source={require('../images/common/logo.png')}/> 
            </Left>
            <Right style={{flexDirection:'row'}}>

            <TouchableOpacity onPress={()=>props.navigation.navigate('Search')}>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.navigation.navigate('Shopping_Cart')}>
                <Thumbnail style={{height:40, resizeMode:'contain', marginLeft:-10}} source={{uri: "https://i.postimg.cc/Prprv05j/i-basket.png"}} />
            </TouchableOpacity>
            </Right>
        </Header>

{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
               
        <Content style={{flex:1}}>
          <View style={{flex:1, marginTop:-73}}>
            <TouchableOpacity onPress={() =>{ props.navigation.navigate('Detail0'); }}>
                <Image style={{width:'100%',resizeMode:'contain'}} source={require('../images/test_img/banner01.png')} />
            </TouchableOpacity>
          </View>

          <View style={{flex:1, marginTop:-50}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginLeft:15, marginRight:15}}>
              <Text style={{fontFamily:'Roboto_medium',fontWeight:'bold', fontSize:22}}>Planning Exhibition</Text>
              <TouchableOpacity onPress={()=> {props.navigation.navigate('Detail1')}}>
              <Text style={{fontFamily:'Roboto_medium', fontSize:12}}>VIEW MORE ></Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() =>{ props.navigation.navigate('Detail0'); }}>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:-200}}>
                    <Image style={{width:'40%', resizeMode:'contain', marginLeft:15}} source={require('../images/test_img/pe_3.png')}/>
                    <Image style={{width:'40%', resizeMode:'contain', marginLeft:15}} source={require('../images/test_img/pe_1.png')}/>
                    <Image style={{width:'40%', resizeMode:'contain', marginLeft:15}} source={require('../images/test_img/pe_2.png')}/>
                </View>
            </TouchableOpacity>
          </View>

            <TouchableOpacity onPress={() =>{ props.navigation.navigate('Event_Detail'); }}>          
                <View style={{flex:1}}>
                    <Image style={{resizeMode:'contain', width:'100%', marginTop:-200}} source={require('../images/test_img/banner02.png')}/>
                </View>
            </TouchableOpacity>
                
            <View style={{flex:1}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginLeft:15, marginRight:15}}>
                    <Text style={{fontFamily:'Roboto_medium',fontWeight:'bold', fontSize:22}}>MD Pick</Text>
                    <Text style={{fontFamily:'Roboto_medium', fontSize:12}}>VIEW MORE ></Text>
                </View>
            <View>

            <TouchableOpacity onPress={() =>{ props.navigation.navigate('productDetail1'); }}>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', marginTop:-200}}>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_1.png')}/>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_2.png')}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-460}}>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_4.png')}/>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_3.png')}/>
                </View>
              </TouchableOpacity>              
            </View>
          </View>

            <View style={{flex:1, backgroundColor:'#F7F7F7', marginTop:-200}}>
                <View style={{alignItems:'center', marginTop:50}}>
                <Text style={{marginBottom:20}}>NEW BRAND</Text>
          <TouchableOpacity onPress={() =>{ props.navigation.navigate('Brand'); }}>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', flexWrap:'nowrap', marginTop:-100}}>
                    <Image style={{width:'25%', resizeMode:'contain'}} source={require('../images/test_img/br_2.png')}/>
                    <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('../images/test_img/br_1.png')}/>
                    <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('../images/test_img/br_3.png')}/>
                    <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('../images/test_img/br_4.png')}/>
                    <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('../images/test_img/br_5.png')}/>
                </View>
          </TouchableOpacity>
                    <Button transparent style={{marginLeft:'auto', marginRight:'auto', marginTop:-80,marginBottom:20}}>
                    <Image style={{width:'25%', resizeMode:'contain'}} source={require('../images/content/viewmore01.png')}/>
                    </Button>
                </View>
            </View>
              
            <TouchableOpacity onPress={() =>{ props.navigation.navigate('Detail0'); }}>
              <Image style={{flex:1, width:'100%', resizeMode:'contain', marginTop:-50}} source={require('../images/test_img/banner03.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{ props.navigation.navigate('productDetail1'); }}>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-270}}>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/pe_p1.png')}/>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/pe_p2.png')}/>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-460}}>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/pe_p3.png')}/>
                        <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/pe_p4.png')}/>
                    </View>
                    <View style={{alignItems:'center', marginTop:-300}}>
                        <Image style={{width:'25%', resizeMode:'contain'}} source={require('../images/content/viewmore01.png')}/>
                    </View>
                </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{ props.navigation.navigate('productDetail1'); }}>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-300}}>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_1.png')}/>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_2.png')}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-460, marginBottom:-200}}>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_4.png')}/>
                    <Image style={{width:'45%', resizeMode:'contain'}} source={require('../images/test_img/re_3.png')}/>
                </View>
            </View>
          </TouchableOpacity>

        </Content>


{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Footer style={{height:80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }

export default MainPage;