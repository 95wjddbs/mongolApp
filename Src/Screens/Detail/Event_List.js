import React, {Component} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right,
  View,
  Text,
  Thumbnail,
} from 'native-base';

import Footer_Component from '../../Components/Footer_Component';

export default function Event_List(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>이벤트</Title>
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
        <ScrollView>
          <View style={{alignItems: 'center', marginTop: 16, marginBottom: 16}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>EVENT</Text>
          </View>
          <View>
            <View>
              <Image
                style={{resizeMode: 'cover', width: '100%', height: 90}}
                source={require('../../images/test_img/banner02.png')}
              />
              <View padder>
                <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                  O HUI Purchase Apprec O HUI Purchase Apprec hahahahahappp
                </Text>
                <Text note>Free gift random (Until sold out)</Text>
              </View>
            </View>
            <View>
              <Image
                style={{resizeMode: 'cover', width: '100%', height: 90}}
                source={require('../../images/test_img/banner02.png')}
              />
              <View padder>
                <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                  O HUI Purchase Apprec O HUI Purchase Apprec hahahahahappp
                </Text>
                <Text note>Free gift random (Until sold out)</Text>
              </View>
            </View>
            <View>
              <Image
                style={{resizeMode: 'cover', width: '100%', height: 90}}
                source={require('../../images/test_img/banner02.png')}
              />
              <View padder>
                <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                  O HUI Purchase Apprec O HUI Purchase Apprec hahahahahappp
                </Text>
                <Text note>Free gift random (Until sold out)</Text>
              </View>
            </View>
            <View>
              <Image
                style={{resizeMode: 'cover', width: '100%', height: 90}}
                source={require('../../images/test_img/banner02.png')}
              />
              <View padder>
                <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                  O HUI Purchase Apprec O HUI Purchase Apprec hahahahahappp
                </Text>
                <Text note>Free gift random (Until sold out)</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
}
