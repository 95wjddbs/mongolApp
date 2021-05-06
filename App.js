import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationActions} from 'react-navigation';
import MenuDrawer from 'react-native-side-drawer'

import myPoint from './src/components/myPoint'
import search from './src/components/search'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
function MainPage(props){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container style={{flex:1, backgroundColor:'white'}}>
        <Header style={{backgroundColor:'white', alignItems:'center'}}>
            <Left style={{flexDirection:'row'}}>
                <Image style={{width:150, resizeMode:'contain'}}source={require('./src/images/common/logo.png')}/> 
            </Left>
            <Right style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('search')}>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}}/>
              </TouchableOpacity>
                <Thumbnail style={{height:40, resizeMode:'contain', marginLeft:-10}} source={{uri: "https://i.postimg.cc/Prprv05j/i-basket.png"}} />
            </Right>
        </Header>

{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
               
        <Content style={{flex:1}}>
          <View style={{marginTop:-73}}>
            <Image style={{width:'100%',resizeMode:'contain'}} source={require('./src/images/test_img/banner01.png')} />
          </View>

          <View style={{flex:1, marginTop:-50}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginLeft:15, marginRight:15}}>
              <Text style={{fontFamily:'Roboto_medium',fontWeight:'bold', fontSize:22}}>Planning Exhibition</Text>
              <Text style={{fontFamily:'Roboto_medium', fontSize:12}}>VIEW MORE ></Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:-200}}>
              <Image style={{width:'40%', resizeMode:'contain', marginLeft:15}} source={require('./src/images/test_img/pe_3.png')}/>
              <Image style={{width:'40%', resizeMode:'contain', marginLeft:15}} source={require('./src/images/test_img/pe_1.png')}/>
              <Image style={{width:'40%', resizeMode:'contain', marginLeft:15}} source={require('./src/images/test_img/pe_2.png')}/>
            </View>
          </View>

            <Image style={{resizeMode:'contain', width:'100%', marginTop:-200}} source={require('./src/images/test_img/banner02.png')}/>

          <View style={{flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginLeft:15, marginRight:15}}>
              <Text style={{fontFamily:'Roboto_medium',fontWeight:'bold', fontSize:22}}>MD Pick</Text>
              <Text style={{fontFamily:'Roboto_medium', fontSize:12}}>VIEW MORE ></Text>
            </View>
            <View>
              <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-200}}>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_1.png')}/>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_2.png')}/>
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-460}}>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_4.png')}/>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_3.png')}/>
              </View>
            </View>
          </View>

          <View style={{backgroundColor:'#F7F7F7', marginTop:-200}}>
            <View style={{alignItems:'center', marginTop:50}}>
              <Text style={{marginBottom:20}}>NEW BRAND</Text>
              <View style={{flexDirection:'row', justifyContent:'space-evenly', flexWrap:'nowrap', marginTop:-100}}>
                  <Image style={{width:'25%', resizeMode:'contain'}} source={require('./src/images/test_img/br_2.png')}/>
                  <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('./src/images/test_img/br_1.png')}/>
                  <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('./src/images/test_img/br_3.png')}/>
                  <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('./src/images/test_img/br_4.png')}/>
                  <Image style={{width:'25%', resizeMode:'contain', marginLeft:100}} source={require('./src/images/test_img/br_5.png')}/>
              </View>
                <Button transparent style={{marginLeft:'auto', marginRight:'auto', marginTop:-80,marginBottom:20}}>
                  <Image style={{width:'25%', resizeMode:'contain'}} source={require('./src/images/content/viewmore01.png')}/>
                </Button>
            </View>
          </View>
              
              <Image style={{width:'100%', resizeMode:'contain', marginTop:-50}} source={require('./src/images/test_img/banner03.png')}/>

          <View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-270}}>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/pe_p1.png')}/>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/pe_p2.png')}/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-460}}>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/pe_p3.png')}/>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/pe_p4.png')}/>
            </View>
              <View style={{alignItems:'center', marginTop:-300}}>
                <Image style={{width:'25%', resizeMode:'contain'}} source={require('./src/images/content/viewmore01.png')}/>
              </View>
          </View>

          <View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-300}}>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_1.png')}/>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_2.png')}/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:-460, marginBottom:-200}}>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_4.png')}/>
                <Image style={{width:'45%', resizeMode:'contain'}} source={require('./src/images/test_img/re_3.png')}/>
            </View>
          </View>

        </Content>


{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button onPress={()=> props.navigation.openDrawer('Category')}>
              <Image style={{height:30, resizeMode:'contain'}} source={require('./src/images/common/menu_icon01.png')} />
              <Text style={{fontSize:9}}>CATEGORY  </Text>
            </Button>
            <Button onPress={()=> props.navigation.navigate('myPoint')}>
              <Image style={{height:30, resizeMode:'contain'}} source={require('./src/images/common/menu_icon02.png')} />
              <Text style={{fontSize:9}}>Point</Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('./src/images/common/menu_icon03.png')} />
              <Text style={{fontSize:9}}>Search</Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('./src/images/common/menu_icon04.png')} />
              <Text style={{fontSize:9}}>Contact</Text>
            </Button>
            <Button>
              <Image style={{height:30, resizeMode:'contain'}} source={require('./src/images/common/menu_icon05.png')} />
              <Text style={{fontSize:9}}>MY</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
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
        <Drawer.Screen name="Category" component={Category} />
        <Stack.Screen name="myPoint" component={myPoint} />
        <Stack.Screen name="search" component={search} />
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