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
} from 'native-base';
import Footer_Component from '../Components/Footer_Component';
import Carousel from '../Components/Carousel';
import Horizonal_Scroll_Round from '../Components/Horizonal_Scroll_Round';
import Horizonal_Scroll_Square from '../Components/Horizonal_Scroll_Square';
import Flatlist_Slider from '../Components/Flatlist_Slider';
import Tabview from '../Components/Tabview';
import Image_On_Text from '../Components/Image_On_Text';

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
        <Right style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
            <Thumbnail
              style={{height: 35, resizeMode: 'contain'}}
              source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Shopping_Cart')}>
            <Thumbnail
              style={{height: 40, resizeMode: 'contain', marginLeft: -10}}
              source={{uri: 'https://i.postimg.cc/Prprv05j/i-basket.png'}}
            />
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
              <Text style={{fontFamily: 'Roboto_medium', fontSize: 12}}>
                VIEW MORE
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Detail0');
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: -200,
              }}>
              <View
                style={{width: '42%', marginLeft: 15, flexDirection: 'column'}}>
                <Image
                  style={{resizeMode: 'contain', width: '100%'}}
                  source={require('../images/test_img/pe_3.png')}
                />
                <View style={{marginTop: -220}}>
                  <Text style={{fontWeight: 'bold', fontSize: 14}}>
                    O HUI Purchase Apprec...
                  </Text>
                  <Text note style={{fontSize: 11}}>
                    Free gift random (Until sold out)
                  </Text>
                </View>
              </View>

              <View style={{width: '42%', marginLeft: 15}}>
                <Image
                  style={{width: '100%', resizeMode: 'contain'}}
                  source={require('../images/test_img/pe_1.png')}
                />
                <View style={{marginTop: -220}}>
                  <Text style={{fontWeight: 'bold', fontSize: 14}}>
                    airvita Purchase Appre.....
                  </Text>
                  <Text note style={{fontSize: 11}}>
                    Free gift random (Until sold out)
                  </Text>
                </View>
              </View>
              <Image
                style={{width: '42%', resizeMode: 'contain', marginLeft: 15}}
                source={require('../images/test_img/pe_2.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Event_Detail');
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{resizeMode: 'contain', width: '100%', marginTop: -200}}
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
            <Text style={{fontFamily: 'Roboto_medium', fontSize: 12}}>
              VIEW MORE
            </Text>
          </View>

          <Tabview />
        </View>

        <View
          style={{
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            paddingTop: 100,
            marginTop: -100,
          }}>
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

        <Image_On_Text />

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('productDetail1');
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: -300,
              }}>
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../images/test_img/re_1.png')}
              />
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../images/test_img/re_2.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: -460,
                marginBottom: -200,
              }}>
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../images/test_img/re_4.png')}
              />
              <Image
                style={{width: '45%', resizeMode: 'contain'}}
                source={require('../images/test_img/re_3.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
};

export default MainPage;
