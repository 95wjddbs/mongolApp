import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
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
  Thumbnail,
  Card,
  CardItem,
} from 'native-base';

import Footer_Component from '../../Components/Footer_Component';

export default function Brand_Detail(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>
            adidas Young Athletes
          </Title>
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
        <View>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>탭 들어갈 자리</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <View style={{backgroundColor: '#E3E3E3', padding: '50%'}}></View>
            </CardItem>

            <CardItem>
              <Left
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -120,
                  marginBottom: -120,
                }}>
                <Image
                  style={{
                    width: '20%',
                    resizeMode: 'contain',
                    marginLeft: 20,
                  }}
                  source={require('../../images/test_img/br_3.png')}
                />
                <Text style={{fontSize: 20, marginLeft: 20}}>
                  adidas Young Athletes
                </Text>
              </Left>
            </CardItem>
          </Card>

          <TouchableOpacity
            onPress={() => {
              navigate('productDetail1');
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: -220,
                marginBottom: -220,
              }}>
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../../images/test_img/re_1.png')}
              />
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../../images/test_img/re_2.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: -220,
                marginBottom: -220,
              }}>
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../../images/test_img/re_3.png')}
              />
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../../images/test_img/re_4.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
}
