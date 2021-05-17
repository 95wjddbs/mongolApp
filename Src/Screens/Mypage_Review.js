import React, {Component} from 'react';
import {ScrollView, Image, TouchableOpacity} from 'react-native';
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
import {FlatListSlider} from 'react-native-flatlist-slider';
import Footer_Component from '../Components/Footer_Component';
import Flatlist_Slider_Review from '../Components/Flatlist_Slider_Review';

const images = [
  {
    banner: require('../images/test_img/banner01.png'),
    desc: '1',
  },
  {
    banner: require('../images/test_img/banner01-1.png'),
    desc: '2',
  },
  {
    banner: require('../images/test_img/banner01-2.png'),
    desc: '3',
  },
  {
    banner: require('../images/test_img/banner01-3.png'),
    desc: '4',
  },
];

export default function Mypage_Review(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>구매후기</Title>
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

      <Content style={{flex: 1, backgroundColor: '#F5FAFB'}}>
        <View>
          <Text>
            내가 쓴 구매 후기{' '}
            <Text note>
              <Text note style={{color: 'orange'}}>
                4
              </Text>
              건
            </Text>
          </Text>

          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              left: '5%',
            }}>
            <List>
              <ListItem thumbnail>
                <Left
                  style={{
                    backgroundColor: 'black',
                    padding: 20,
                    borderRadius: 50,
                  }}></Left>
                <Body>
                  <Text style={{fontWeight: 'bold'}}>
                    아보카도 10과 소과/중과
                  </Text>
                </Body>
                <Right>
                  <Text note>2020.03.05</Text>
                </Right>
              </ListItem>
            </List>

            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/common/color.png')}
                style={{
                  resizeMode: 'cover',
                  width: 200,
                  height: 200,
                  marginTop: 16,
                }}
              />
            </View>
          </View>
        </View>
        <Flatlist_Slider_Review />
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
}
