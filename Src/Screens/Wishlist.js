import React, {Component} from 'react';
import {TouchableOpacity, Image, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Thumbnail,
  Footer,
  Title,
  View,
} from 'native-base';

import Footer_Component from '../Components/Footer_Component';

export default function Shopping_Cart(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>위시리스트</Title>
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
        <ListItem style={{borderBottomWidth: 0}}>
          <Body style={{flexDirection: 'row'}}>
            <Text style={{color: '#E87B0C', textDecorationLine: 'underline'}}>
              내 위시리스트 1
            </Text>
            <Text>내 위시리스트 2</Text>
          </Body>
          <Button
            onPress={() => alert('추가되었습니다.')}
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              marginRight: -40,
              borderWidth: 1,
              borderColor: '#E87B0C',
            }}>
            <Text style={{color: '#E87B0C', fontSize: 15}}>
              + 위시리스트 추가
            </Text>
          </Button>
        </ListItem>

        <View style={{backgroundColor: '#F5FAFB'}}>
          <Text style={{fontSize: 8}}></Text>
        </View>

        <View
          style={{
            paddingTop: 16,
            paddingBottom: 16,
            paddingRight: '3%',
            paddingLeft: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#EBEBEB',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            내 위시리스트1 <Text style={{color: '#E87B0C'}}>45</Text>
          </Text>
          <Image
            source={require('../images/content/etc.png')}
            style={{resizeMode: 'cover', height: 35, width: 30}}
          />
        </View>

        <ScrollView style={{marginTop: -100}}>
          <View style={{marginRight: 16, marginTop: 40}}>
            <Body>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../images/common/color.png')}
                  style={{resizeMode: 'contain', width: '30%'}}
                />
                <View style={{marginLeft: 16}}>
                  <Text note>Panasonic</Text>
                  <Text>PANASONIC 6yAaa ㄴㄴㄴ</Text>
                  <Text />
                  <Text>1,400,390₮ / 1개</Text>
                </View>
                <Image
                  source={require('../images/content/etc02.png')}
                  style={{
                    resizeMode: 'cover',
                    width: 30,
                    height: 30,
                    top: '-10%',
                    right: '-10%',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -160,
                }}>
                <Image
                  source={require('../images/common/color.png')}
                  style={{resizeMode: 'contain', width: '30%'}}
                />
                <View style={{marginLeft: 16}}>
                  <Text note>Panasonic</Text>
                  <Text>PANASONIC 6yAaa ㄴㄴㄴ</Text>
                  <Text />
                  <Text>1,400,390₮ / 1개</Text>
                </View>
                <Image
                  source={require('../images/content/etc02.png')}
                  style={{
                    resizeMode: 'cover',
                    width: 30,
                    height: 30,
                    top: '-10%',
                    right: '-10%',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -160,
                }}>
                <Image
                  source={require('../images/common/color.png')}
                  style={{resizeMode: 'contain', width: '30%'}}
                />
                <View style={{marginLeft: 16}}>
                  <Text note>Panasonic</Text>
                  <Text>PANASONIC 6yAaa ㄴㄴㄴ</Text>
                  <Text />
                  <Text>1,400,390₮ / 1개</Text>
                </View>
                <Image
                  source={require('../images/content/etc02.png')}
                  style={{
                    resizeMode: 'cover',
                    width: 30,
                    height: 30,
                    top: '-10%',
                    right: '-10%',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -160,
                }}>
                <Image
                  source={require('../images/common/color.png')}
                  style={{resizeMode: 'contain', width: '30%'}}
                />
                <View style={{marginLeft: 16}}>
                  <Text note>Panasonic</Text>
                  <Text>PANASONIC 6yAaa ㄴㄴㄴ</Text>
                  <Text />
                  <Text>1,400,390₮ / 1개</Text>
                </View>
                <Image
                  source={require('../images/content/etc02.png')}
                  style={{
                    resizeMode: 'cover',
                    width: 30,
                    height: 30,
                    top: '-10%',
                    right: '-10%',
                  }}
                />
              </View>
            </Body>
          </View>

          <View style={{backgroundColor: '#F5FAFB', marginTop: 16}}>
            <Text style={{fontSize: 8}}></Text>
          </View>
        </ScrollView>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
}
