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
  Icon,
  Text,
  Left,
  Body,
  Title,
  Right,
  View,
  Thumbnail,
  Tab,
  Tabs,
} from 'native-base';

import Footer_Component from '../../Components/Footer_Component';

import Tab1 from './productTab/tab1';
import Tab2 from './productTab/tab2';
import Tab3 from './productTab/tab3';
import Tab4 from './productTab/tab4';

export default class Event_Detail extends Component {
  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <Container>
        <Header style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon name="arrow-back" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black', fontWeight: 'bold'}}>상품상세</Title>
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
            <View>
              <Image
                style={{resizeMode: 'contain'}}
                source={require('../../images/test_img/productDetail.png')}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    borderWidth: 1,
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }}>
                  adidas
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{resizeMode: 'contain', height: 30, marginRight: -110}}
                  source={require('../../images/content/pick_off.png')}
                />
                <Image
                  style={{resizeMode: 'contain', height: 30, marginRight: -40}}
                  source={require('../../images/content/link.png')}
                />
              </View>
            </View>

            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 24}}>
                WB TRAVEL 01
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>cnasdfksadfmsakdfm</Text>
                <Text note style={{marginLeft: 30}}>
                  #FM9393
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 16,
                  }}>
                  <Text style={{fontSize: 20}}>269,000 T</Text>
                  <Text
                    note
                    style={{
                      marginLeft: 20,
                      textDecorationLine: 'line-through',
                    }}>
                    299,000 T
                  </Text>
                </View>
                <View style={{marginRight: 16}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#FFBB5B',
                      textDecorationLine: 'underline',
                    }}>
                    10% off
                  </Text>
                </View>
              </View>

              <View style={{marginTop: 30}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{width: 100}}>Benefits</Text>
                  <Text style={{}}>
                    100T discount coupon payment per 10000T purchased
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{width: 100}}>Delivery Condition</Text>
                  <Text>
                    The finished goods will be delivered in 24-48 hours.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{width: 100}}>Delivery fee</Text>
                  <Text>free</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 30}}>
                <View>
                  <Text>Related item</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      height: 40,
                      marginLeft: -200,
                    }}
                    source={require('../../images/test_img/productDetail.png')}
                  />
                  <Image
                    style={{
                      resizeMode: 'contain',
                      height: 40,
                      marginLeft: -400,
                    }}
                    source={require('../../images/test_img/productDetail.png')}
                  />
                </View>
              </View>
            </View>

            <Tabs
              style={{
                marginTop: 30,
                backgroundColor: 'white',
                marginBottom: -500,
              }}>
              <Tab style={{}} heading="Product description">
                <Tab1 />
              </Tab>
              <Tab heading="Reviews (17)">
                <Tab2 />
              </Tab>
              <Tab heading="Q&A">
                <Tab3 />
              </Tab>
              <Tab heading="Seller Information">
                <Tab4 />
              </Tab>
            </Tabs>
          </View>
        </Content>

        <Footer style={{height: 80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }
}
