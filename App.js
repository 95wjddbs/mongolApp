import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Left, Body, Title, Right, View, Thumbnail } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationActions} from 'react-navigation';
import MenuDrawer from 'react-native-side-drawer'

import ConfigData from './Src/components/config.json';
import MainPage from './Src/components/MainPage'

import myPoint from './Src/components/myPoint'
import Search from './Src/components/Search'
import Wishlist from './Src/components/Wishlist'
import Shopping_Cart from './Src/components/Shopping_Cart'

import Detail0 from './Src/components/Detail/Detail0'
import Detail1 from './Src/components/Detail/Detail1'
import Event_Detail from './Src/components/Detail/Event_Detail'
import Event_List from './Src/components/Detail/Event_List'
import productDetail1 from './Src/components/Detail/productDetail1'
import Brand from './Src/components/Detail/Brand'
import brandDetail from './Src/components/Detail/brandDetail'

import Footer_Component from './Src/components/Footer_Component'

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

  let Header_to;

  function Category({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width:-120 }}>
        <Text>Category Screen</Text>
      </View>
    );
  }


  function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Shopping_Cart" component={Shopping_Cart} />
        <Drawer.Screen name="Category" component={Category} />
        <Stack.Screen name="Footer_Component" component={Footer_Component} />
        <Stack.Screen name="myPoint" component={myPoint} />
        <Stack.Screen name="Wishlist" component={Wishlist} />

        <Stack.Screen name="Detail0" component={Detail0} />
        <Stack.Screen name="Detail1" component={Detail1} />
        <Stack.Screen name="Event_Detail" component={Event_Detail} />
        <Stack.Screen name="Event_List" component={Event_List} />
        <Stack.Screen name="productDetail1" component={productDetail1} />
        <Stack.Screen name="Brand" component={Brand} />
        <Stack.Screen name="brandDetail" component={brandDetail} />
      </Drawer.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );

}

export default App;