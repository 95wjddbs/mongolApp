import React, {Component} from 'react';
import {ScrollView, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Title,
  Right,
  View,
  Item,
  Input,
  List,
  ListItem,
} from 'native-base';
import Footer_Component from '../Components/Footer_Component';

export default function Log_In(props) {
  const {navigate, goBack} = props.navigation;
  return (
    <Container>
      <Header style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Left>
          <Button transparent onPress={() => goBack()}>
            <Icon name="arrow-back" style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black', fontWeight: 'bold'}}>로그인</Title>
        </Body>
        <Right style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('MainPage')}>
            <Image
              source={require('../images/common/m_icon06.png')}
              style={{
                resizeMode: 'cover',
                width: 30,
                height: 30,
                marginRight: 16,
              }}
            />
          </TouchableOpacity>
        </Right>
      </Header>

      <Content style={{flex: 1, backgroundColor: '#F5FAFB'}}>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Image
            source={require('../images/common/login_logo.png')}
            style={{resizeMode: 'contain', width: 250, height: 250}}
          />
        </View>

        <View style={{}}>
          <ListItem noBorder>
            <Item regular style={{padding: 5}}>
              <Input placeholder="ID" />
            </Item>
          </ListItem>
          <ListItem noBorder>
            <Item regular style={{padding: 5, marginTop: -24}}>
              <Input placeholder="PASSWORD" />
            </Item>
          </ListItem>

          <View style={{left: '5%'}}>
            <Button
              onPress={() => navigate('Order_List_Place')}
              style={{
                backgroundColor: 'black',
                width: '90%',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                LOGIN
              </Text>
            </Button>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: '5%',
              paddingRight: '5%',
              marginTop: 8,
            }}>
            <Text onPress={() => navigate('Sign_In')} style={{}}>
              Sign up
            </Text>
            <Text style={{color: 'purple'}}>Forgot Password?</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 80,
            marginBottom: 80,
          }}>
          <Image
            source={require('../images/common/login_img03.png')}
            style={{resizeMode: 'cover', width: 60, height: 60}}
          />
          <Image
            source={require('../images/common/login_img04.png')}
            style={{resizeMode: 'cover', width: 60, height: 60, marginLeft: 16}}
          />
        </View>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}
