import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
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

export default class Shopping_Cart extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black'}}>장바구니</Title>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Search')}>
              <Thumbnail
                style={{height: 35, resizeMode: 'contain'}}
                source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Form></Form>
        </Content>

        <Footer style={{height: 80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }
}
