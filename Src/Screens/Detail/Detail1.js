import React, {Component} from 'react';
import {TouchableOpacity, Image, View, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Thumbnail,
  Footer,
  Title,
} from 'native-base';

import Footer_Component from '../../Components/Footer_Component';

export default function Detail1(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>장바구니</Title>
        </Body>
        <Right style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('Search')}>
            <Thumbnail
              style={{height: 35, resizeMode: 'contain'}}
              source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Shopping_Cart')}>
            <Icon name="cart-outline" style={{color: 'black', fontSize: 36}} />
          </TouchableOpacity>
        </Right>
      </Header>

      <Content>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Planning Exhibition
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: -180,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={{resizeMode: 'contain', width: '100%'}}
              source={require('../../images/test_img/pe_3.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: -200}}>
              O HUI Purchase Apprec...
            </Text>
            <Text style={{fontSize: 13}}>
              Free gift random (Until sold out)
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={{resizeMode: 'contain', width: '100%'}}
              source={require('../../images/test_img/pe_1.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: -200}}>
              airvita Purchase Appre.....
            </Text>
            <Text style={{fontSize: 13}}>
              Free gift random (Until sold out)
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: -180,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={{resizeMode: 'contain', width: '100%'}}
              source={require('../../images/test_img/pe_3.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: -200}}>
              O HUI Purchase Apprec...
            </Text>
            <Text style={{fontSize: 13}}>
              Free gift random (Until sold out)
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={{resizeMode: 'contain', width: '100%'}}
              source={require('../../images/test_img/pe_1.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: -200}}>
              airvita Purchase Appre.....
            </Text>
            <Text style={{fontSize: 13}}>
              Free gift random (Until sold out)
            </Text>
          </View>
        </View>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}
