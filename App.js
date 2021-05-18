import React, {Component} from 'react';
import {Button, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './Src/Screens/MainPage';

import Category from './Src/Screens/Category';
import myPoint from './Src/Screens/myPoint';
import Search from './Src/Screens/Search';
import Wishlist from './Src/Screens/Wishlist';
import Mypage from './Src/Screens/Mypage';
import Mypage_Review from './Src/Screens/Mypage_Review';
import Shopping_Cart from './Src/Screens/Shopping_Cart';
import Log_In from './Src/Screens/Log_In';
import Sign_In from './Src/Screens/Sign_In';
import Sign_In_Finish from './Src/Screens/Sign_In_Finish';

import Detail0 from './Src/Screens/Detail/Detail0';
import Detail1 from './Src/Screens/Detail/Detail1';
import Event_Detail from './Src/Screens/Detail/Event_Detail';
import Event_List from './Src/Screens/Detail/Event_List';
import productDetail1 from './Src/Screens/Detail/productDetail1';
import Brand from './Src/Screens/Detail/Brand';
import brandDetail from './Src/Screens/Detail/brandDetail';
import Coupon from './Src/Screens/Coupon';
import Order_List from './Src/Screens/Order_List';
import Order_List_Place from './Src/Screens/Order_List_Place';
import Order_List_Pay from './Src/Screens/Order_List_Pay';

import Flatlist_Slider from './Src/Components/Flatlist_Slider';
import Horizonal_Scroll_Square from './Src/Components/Horizonal_Scroll_Square';

import Footer_Component from './Src/Components/Footer_Component';

const Stack = createStackNavigator();

const MainStackNavigator = props => {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen
        name="MainPage"
        options={{
          headerShown: false,
        }}
        component={MainPage}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Shopping_Cart"
        component={Shopping_Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Log_In"
        component={Log_In}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign_In"
        component={Sign_In}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign_In_Finish"
        component={Sign_In_Finish}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Footer_Component"
        component={Footer_Component}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
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
        name="Mypage"
        component={Mypage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mypage_Review"
        component={Mypage_Review}
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
        name="Coupon"
        component={Coupon}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_List"
        component={Order_List}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_List_Place"
        component={Order_List_Place}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_List_Pay"
        component={Order_List_Pay}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Flatlist_Slider"
        component={Flatlist_Slider}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Horizonal_Scroll_Square"
        component={Horizonal_Scroll_Square}
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
