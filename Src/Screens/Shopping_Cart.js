import React, {Component} from 'react';
import {TouchableOpacity, Image, View, ScrollView} from 'react-native';
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>장바구니</Title>
        </Body>
        <Right style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('Search')}>
            <Thumbnail
              style={{height: 35, resizeMode: 'contain'}}
              source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('이미 해당 메뉴입니다')}>
            <Icon name="cart-outline" style={{color: 'black', fontSize: 36}} />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <ListItem style={{borderBottomWidth: 0}}>
          <CheckBox color="grey" />
          <Body style={{}}>
            <Text>전체선택(총 3개)</Text>
          </Body>
          <Button
            onPress={() => alert('삭제되었습니다')}
            style={{backgroundColor: 'white'}}>
            <Text style={{color: 'black', fontSize: 15}}>선택삭제</Text>
          </Button>
        </ListItem>

        <View style={{backgroundColor: '#F5FAFB'}}>
          <Text style={{fontSize: 8}}></Text>
        </View>
        <ListItem style={{borderBottomWidth: 2, marginRight: 16}}>
          <CheckBox color="grey" onPress={{}} />
          <Body>
            <Text style={{fontWeight: 'bold'}}>판매샾이름</Text>
          </Body>
        </ListItem>

        <ScrollView>
          <View style={{flex: 1, marginTop: -120}}>
            <ListItem style={{marginRight: 16, borderBottomWidth: 0}}>
              <CheckBox color="grey" />
              <Body>
                <Text>참 좋은 상품이름1242</Text>
              </Body>
              <Image
                source={require('../images/common/delete01_b.png')}
                style={{resizeMode: 'contain', width: 50}}
              />
            </ListItem>
            <ListItem style={{marginRight: 16}}>
              <Body style={{marginTop: -220, left: 30, marginBottom: -80}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../images/common/color.png')}
                    style={{resizeMode: 'contain', width: '30%'}}
                  />
                  <View>
                    <Text>옵션: 상품 레드 100 size</Text>
                    <Text note>400포인트 적립 예정</Text>
                    <Text />
                    <Text>1,400,390T</Text>
                  </View>
                </View>
              </Body>
            </ListItem>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 10, padding: 15}}>
            <Text>2,800,390 + 0 (배송비) + = 2,800,390T</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Button
              transparent
              style={{
                width: '30%',
                borderWidth: 1,
                borderColor: '#EBEBEB',
              }}>
              <Text style={{color: 'black', fontSize: 20}}>2</Text>
            </Button>

            <Button
              transparent
              style={{
                width: '30%',
                borderWidth: 1,
                borderColor: '#EBEBEB',
              }}>
              <Text style={{color: 'black'}}>찜하기</Text>
            </Button>
            <Button
              transparent
              style={{
                width: '30%',
                borderWidth: 1,
                borderColor: '#EBEBEB',
              }}>
              <Text style={{color: 'black'}}>구매하기</Text>
            </Button>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#EBEBEB',
              marginTop: 20,
            }}
          />

          <View style={{flex: 1, marginTop: -100}}>
            <ListItem style={{marginRight: 16, borderBottomWidth: 0}}>
              <CheckBox color="grey" />
              <Body>
                <Text>참 좋은 상품이름1242</Text>
              </Body>
              <Image
                source={require('../images/common/delete01_b.png')}
                style={{resizeMode: 'contain', width: 50}}
              />
            </ListItem>
            <ListItem style={{marginRight: 16}}>
              <Body style={{marginTop: -220, left: 30, marginBottom: -80}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../images/common/color.png')}
                    style={{resizeMode: 'contain', width: '30%'}}
                  />
                  <View>
                    <Text>옵션: 상품 레드 100 size</Text>
                    <Text note>400포인트 적립 예정</Text>
                    <Text />
                    <Text>1,400,390T</Text>
                  </View>
                </View>
              </Body>
            </ListItem>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 10, padding: 15}}>
            <Text>2,800,390 + 0 (배송비) + = 2,800,390T</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Button
              transparent
              style={{
                width: '30%',
                borderWidth: 1,
                borderColor: '#EBEBEB',
              }}>
              <Text style={{color: 'black', fontSize: 20}}>2</Text>
            </Button>

            <Button
              transparent
              style={{
                width: '30%',
                borderWidth: 1,
                borderColor: '#EBEBEB',
              }}>
              <Text style={{color: 'black'}}>찜하기</Text>
            </Button>
            <Button
              transparent
              style={{
                width: '30%',
                borderWidth: 1,
                borderColor: '#EBEBEB',
              }}>
              <Text style={{color: 'black'}}>구매하기</Text>
            </Button>
          </View>
        </ScrollView>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}
