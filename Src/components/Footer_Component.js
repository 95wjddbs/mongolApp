import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail } from 'native-base';

function Footer_Component(){
    return(
    <Container>
        <Footer style={{height:80}}>
          <FooterTab style={{backgroundColor:'white', alignItems:'center'}}>
            <Button onPress={()=> {props.navigation.openDrawer('Category'); }}>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon01.png')} />
              <Text style={{fontSize:9, color:'black'}}>CATEGORY  </Text>
            </Button>
            <Button onPress={()=> {props.navigation.navigate('myPoint'); }}>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon02.png')} />
              <Text style={{fontSize:9, color:'black'}}>Point</Text>
            </Button>
            <Button onPress={()=> {props.navigation.navigate('Search'); }}>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon03.png')} />
              <Text style={{fontSize:9, color:'black'}}>Search</Text>
            </Button>
            <Button onPress={()=> {props.navigation.navigate('Wishlist'); }}>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon04.png')} />
              <Text style={{fontSize:9, color:'black'}}>Wishlist</Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('../images/common/menu_icon05.png')} />
              <Text style={{fontSize:9, color:'black'}}>MY</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

export default Footer_Component;