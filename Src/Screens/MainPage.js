import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Button,
  Text,
  Left,
  Right,
  View,
  Thumbnail,
  Icon,
} from 'native-base';
import Footer_Component from '../Components/Footer_Component';
import Carousel from '../Components/Carousel';
import Horizonal_Scroll_Round from '../Components/Horizonal_Scroll_Round';
import Horizonal_Scroll_Square from '../Components/Horizonal_Scroll_Square';
import Flatlist_Slider from '../Components/Flatlist_Slider';
import Tabview from '../Components/Tabview';
import Image_On_Text from '../Components/Image_On_Text';
import Product_List from '../Components/Product_List';
import Font_Gradient from '../Components/Font_Gradient';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const MainPage = props => {
  return (
    <Container style={{flex: 1, backgroundColor: 'white'}}>
      <Header style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Left style={{flexDirection: 'row'}}>
          <Image
            style={{width: 150, resizeMode: 'contain'}}
            source={require('../images/common/logo.png')}
          />
        </Left>
        <Right style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
            <Thumbnail
              style={{height: 35, resizeMode: 'contain'}}
              source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Shopping_Cart')}>
            <Icon name="cart-outline" style={{color: 'black'}} />
          </TouchableOpacity>
        </Right>
      </Header>

      <Content style={{flex: 1}}>
        <Flatlist_Slider {...props} />

        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 15,
              marginRight: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Roboto_medium',
                fontWeight: 'bold',
                fontSize: 22,
              }}>
              Planning Exhibition
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Detail1');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto_medium',
                    fontSize: 12,
                  }}>
                  VIEW MORE
                </Text>
                <Icon
                  name="chevron-forward"
                  style={{color: 'grey', fontSize: 15}}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Horizonal_Scroll_Square {...props} />
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Event_Detail');
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{resizeMode: 'contain', width: '100%'}}
              source={require('../images/test_img/banner02.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 15,
              marginRight: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Roboto_medium',
                fontWeight: 'bold',
                fontSize: 22,
              }}>
              MD Pick
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto_medium',
                  fontSize: 12,
                }}>
                VIEW MORE
              </Text>
              <Icon
                name="chevron-forward"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>
          <React.Fragment>
            <Tabview {...props} />
          </React.Fragment>
        </View>

        <View
          style={{
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            marginTop: -200,
          }}>
          <Font_Gradient />
          <Text
            style={{
              paddingBottom: 40,
              paddingTop: 40,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            NEW BRAND
          </Text>
          <Horizonal_Scroll_Round {...props} />
          <Image
            style={{
              width: '30%',
              resizeMode: 'contain',
              marginTop: -160,
              marginBottom: -50,
            }}
            source={require('../images/content/viewmore01.png')}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Detail0');
          }}>
          <Image
            style={{
              flex: 1,
              width: '100%',
              resizeMode: 'contain',
              marginTop: -50,
            }}
            source={require('../images/test_img/banner03.png')}
          />
        </TouchableOpacity>

        <Image_On_Text {...props} />

        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              paddingBottom: 10,
              marginTop: -40,
            }}>
            <Text
              style={{
                fontFamily: 'Roboto_medium',
                fontWeight: 'bold',
                fontSize: 22,
              }}>
              Best Buy Lease
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto_medium',
                  fontSize: 12,
                }}>
                VIEW MORE
              </Text>
              <Icon
                name="chevron-forward"
                style={{color: 'grey', fontSize: 15}}
              />
            </View>
          </View>
        </View>

        <Product_List {...props} />
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
};

export default MainPage;
