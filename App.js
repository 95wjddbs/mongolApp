import React, {Component} from 'react';
import {Text, View} from 'native-base';
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

import Footer_Component from './Src/Components/Footer_Component';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen
        name="MainPage"
        options={{headerShown: false}}
        component={MainPage}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{title: '검색', headerShown: false}}
      />
      <Stack.Screen
        name="Shopping_Cart"
        component={Shopping_Cart}
        options={{headerShown: false}}
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
