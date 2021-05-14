import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
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
  List,
  ListItem,
} from 'native-base';

import Footer_Component from '../Components/Footer_Component';

function myPoint(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>내 포인트</Title>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            paddingBottom: 50,
          }}>
          <View>
            <Text>내 전자화폐</Text>
            <Text>130,000₮</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                padding: 10,
                paddingLeft: 35,
                paddingRight: 35,
                backgroundColor: 'grey',
                color: 'white',
              }}>
              충전하기
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <List>
            <ListItem thumbnail>
              <Left
                style={{
                  flexDirection: 'column',
                  borderWidth: 1,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <Text style={{color: 'grey'}}>2020</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>03.24</Text>
                <Text note style={{fontSize: 12}}>
                  18:45:47
                </Text>
              </Left>
              <Body>
                <Text note>충전</Text>
                <Text style={{fontWeight: 'bold'}}>500,000₮</Text>
                <Text style={{marginTop: 4}}>기프트 카드</Text>
              </Body>
            </ListItem>
          </List>
        </View>

        <View>
          <List>
            <ListItem thumbnail>
              <Left
                style={{
                  flexDirection: 'column',
                  borderWidth: 1,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <Text style={{color: 'grey'}}>2020</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>03.24</Text>
                <Text note style={{fontSize: 12}}>
                  18:45:47
                </Text>
              </Left>
              <Body>
                <Text note>적립</Text>
                <Text style={{fontWeight: 'bold'}}>500,000₮</Text>
                <Text style={{marginTop: 4}}>상품 구매에 따른 지급</Text>
              </Body>
            </ListItem>
          </List>
        </View>

        <View>
          <List>
            <ListItem thumbnail>
              <Left
                style={{
                  flexDirection: 'column',
                  borderWidth: 1,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <Text style={{color: 'grey'}}>2020</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>03.24</Text>
                <Text note style={{fontSize: 12}}>
                  18:45:47
                </Text>
              </Left>
              <Body>
                <Text note>충전</Text>
                <Text style={{fontWeight: 'bold'}}>500,000₮</Text>
                <Text style={{marginTop: 4}}>기프트 카드</Text>
              </Body>
            </ListItem>
          </List>
        </View>

        <View>
          <List>
            <ListItem thumbnail>
              <Left
                style={{
                  flexDirection: 'column',
                  borderWidth: 1,
                  padding: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}>
                <Text style={{color: 'grey'}}>2020</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>03.24</Text>
                <Text note style={{fontSize: 12}}>
                  18:45:47
                </Text>
              </Left>
              <Body>
                <Text note>충전</Text>
                <Text style={{fontWeight: 'bold'}}>500,000₮</Text>
                <Text style={{marginTop: 4}}>기프트 카드</Text>
              </Body>
            </ListItem>
          </List>
        </View>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}

export default myPoint;
