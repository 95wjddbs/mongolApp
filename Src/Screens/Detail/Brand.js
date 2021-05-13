import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Left,
  Body,
  Title,
  Right,
  View,
  Thumbnail,
  Tab,
  Tabs,
  List,
  ListItem,
} from 'native-base';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Footer_Component from '../../Components/Footer_Component';

export default class Brand extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    const {navigate, goBack} = this.props.navigation;
    return (
      <Container>
        <Header style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon name="arrow-back" style={{color: 'black', fontSize: 24}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black', fontWeight: 'bold'}}>브랜드</Title>
          </Body>
          <Right style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigate('Search')}>
              <Thumbnail
                style={{height: 35, resizeMode: 'contain'}}
                source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Shopping_Cart')}>
              <Icon
                name="cart-outline"
                style={{color: 'black', fontSize: 36}}
              />
            </TouchableOpacity>
          </Right>
        </Header>

        <Content>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate('brandDetail');
              }}>
              <View
                style={{
                  backgroundColor: '#E3E3E3',
                  padding: '40%',
                  marginTop: -50,
                }}></View>
            </TouchableOpacity>

            <SearchBar
              platform="android"
              placeholder="BRAND SEARCH"
              onChangeText={this.updateSearch}
              value={search}
              style={{borderWidth: 2}}
            />

            <List style={{padding: 10}}>
              <ListItem
                selected
                style={{borderTopWidth: 1, borderTopColor: '#EBEBEB'}}>
                <Left>
                  <Text style={{marginRight: 30}}>KOHLER.</Text>
                  <Text numberOfLines={1}>Burberry fragrances</Text>
                </Left>
                <Right>
                  <Icon
                    style={{color: '#CCCCCC', fontSize: 20}}
                    name="chevron-forward"
                  />
                </Right>
              </ListItem>
            </List>

            <List style={{marginLeft: 10, marginRight: 10}}>
              <ListItem selected>
                <Left>
                  <Text style={{marginRight: 30}}>KOHLER.</Text>
                  <Text numberOfLines={1}>Burberry fragrances</Text>
                </Left>
                <Right>
                  <Icon
                    style={{color: '#CCCCCC', fontSize: 20}}
                    name="chevron-forward"
                  />
                </Right>
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
}
