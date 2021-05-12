import React, {Component} from 'react';
import {Button, Image, TouchableOpacity} from 'react-native';
import {Icon, Text, View} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainPage from './Src/Screens/MainPage';

import myPoint from './Src/Screens/myPoint';
import Search from './Src/Screens/Search';
import Wishlist from './Src/Screens/Wishlist';
import Shopping_Cart from './Src/Screens/Shopping_Cart';

import Detail0 from './Src/Screens/Detail/Detail0';
import Detail1 from './Src/Screens/Detail/Detail1';
import Event_Detail from './Src/Screens/Detail/Event_Detail';
import Event_List from './Src/Screens/Detail/Event_List';
import productDetail1 from './Src/Screens/Detail/productDetail1';
import Brand from './Src/Screens/Detail/Brand';
import brandDetail from './Src/Screens/Detail/brandDetail';
import Flatlist_Slider from './Src/Components/Flatlist_Slider';

import Footer_Component from './Src/Components/Footer_Component';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = props => {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen
        name="MainPage"
        options={{
          headerShown: false,
          // headerLeft: () => (
          //   <Image
          //     resizeMode="cover"
          //     source={require('./Src/images/common/logo.png')}
          //     style={{
          //       resizeMode: 'contain',
          //       width: 160,
          //       left: 15,
          //     }}
          //   />
          // ),
          // title: '',
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={{marginRight: 15, flexDirection: 'row'}}
          //     onPress={() => alert('검색 결과가 없습니다')}>
          //     <Icon
          //       name="search-outline"
          //       style={{color: 'black', marginRight: 15}}
          //     />
          //     <Icon name="cart-outline" style={{color: 'black'}} />
          //   </TouchableOpacity>
          // ),
        }}
        component={MainPage}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: 'Please enter a search term',
          headerTitleStyle: {fontSize: 15},
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={() => alert('검색 결과가 없습니다')}>
              <Icon name="search-outline" style={{color: 'black'}} />
            </TouchableOpacity>
          ),
        }}
        options={{title: '검색'}}
      />
      <Stack.Screen
        name="Shopping_Cart"
        component={Shopping_Cart}
        options={{
          headerTitle: '장바구니',
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Footer_Component"
        component={Footer_Component}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="myPoint"
        component={myPoint}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Detail0"
        component={Detail0}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail1"
        component={Detail1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Event_Detail"
        component={Event_Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Event_List"
        component={Event_List}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="productDetail1"
        component={productDetail1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Brand"
        component={Brand}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="brandDetail"
        component={brandDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Flatlist_Slider"
        component={Flatlist_Slider}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
