import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
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
  ListItem,
  Separator,
  Item,
  Input,
} from 'native-base';
import Footer_Component from '../Components/Footer_Component';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import CheckBox from 'react-native-check-box';
import {ScrollView} from 'react-native-gesture-handler';

export default class Order_List_Pay extends Component {
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
            <Title style={{color: 'black', fontWeight: 'bold'}}>결제완료</Title>
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
          <ScrollView
            style={{
              backgroundColor: '#F5FAFB',
            }}>
            <View padder style={{paddingTop: 24}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                결제가 완료되었습니다.
              </Text>
              <Text style={{fontSize: 16, marginTop: 4}}>
                주문번호: 1548565
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                  paddingTop: 16,
                  borderTopWidth: 1,
                }}>
                <Text style={{fontWeight: 'bold'}}>총 결제 금액</Text>
                <Text style={{fontWeight: 'bold'}}>7,512,000T</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: '90%',
                left: '5%',
                marginTop: 16,
              }}>
              <View>
                <TouchableOpacity onPress={() => navigate('productDetail1')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../images/common/color.png')}
                      style={{
                        resizeMode: 'cover',
                        width: 100,
                        height: 100,
                        margin: 20,
                      }}
                    />
                    <View>
                      <Text note style={{marginBottom: 4}}>
                        Panasonic
                      </Text>
                      <Text>PANASONIC 6yAaa ArWAAry</Text>
                      <Text>PANA-SR-JN185</Text>
                      <Text style={{fontWeight: 'bold', marginTop: 8}}>
                        1,400,390T / 1개
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('productDetail1')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderTopWidth: 1,
                      borderColor: '#F5FAFB',
                    }}>
                    <Image
                      source={require('../images/common/color.png')}
                      style={{
                        resizeMode: 'cover',
                        width: 100,
                        height: 100,
                        margin: 20,
                      }}
                    />
                    <View>
                      <Text note style={{marginBottom: 4}}>
                        Panasonic
                      </Text>
                      <Text>PANASONIC 6yAaa ArWAAry</Text>
                      <Text>PANA-SR-JN185</Text>
                      <Text style={{fontWeight: 'bold', marginTop: 8}}>
                        1,400,390T / 1개
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{}}>
                <View
                  padder
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                    borderStyle: 'dotted',
                    borderWidth: 1,
                    borderRadius: 1,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderColor: 'grey',
                    left: '7.5%',
                  }}>
                  <Text style={{color: '#E0E0E0'}}>결제수단</Text>
                  <Text>Paypal</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View style={{padding: '5%'}}>
                    <Text
                      style={{color: '#E0E0E0', fontSize: 14, marginTop: 8}}>
                      주문자
                    </Text>
                    <Text
                      style={{color: '#E0E0E0', fontSize: 14, marginTop: 8}}>
                      연락처
                    </Text>
                    <Text
                      style={{color: '#E0E0E0', fontSize: 14, marginTop: 8}}>
                      휴대폰번호
                    </Text>
                    <Text
                      style={{color: '#E0E0E0', fontSize: 14, marginTop: 8}}>
                      이메일
                    </Text>
                    <Text
                      style={{color: '#E0E0E0', fontSize: 14, marginTop: 8}}>
                      배송지정보
                    </Text>
                    <Text
                      style={{color: '#E0E0E0', fontSize: 14, marginTop: 8}}>
                      요청사항
                    </Text>
                  </View>
                  <View style={{padding: '5%'}}>
                    <Text style={{fontSize: 14, marginTop: 8}}>홍길동</Text>
                    <Text style={{fontSize: 14, marginTop: 8}}>
                      010-1234-1234
                    </Text>
                    <Text style={{fontSize: 14, marginTop: 8}}>
                      010-1234-1234
                    </Text>
                    <Text style={{fontSize: 14, marginTop: 8}}>
                      test@naver.com
                    </Text>
                    <Text style={{fontSize: 14, marginTop: 8}}>
                      서울시 강남구 테헤란로 역삼동 디몬스터
                    </Text>
                    <Text style={{fontSize: 14, marginTop: 8}}>
                      아이가 있으니 벨 누르지 말고 전화 주세요.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <Button
              onPress={() => navigate('Order_List')}
              style={{
                backgroundColor: 'black',
                width: '100%',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginBottom: 50,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                주문내역 보기
              </Text>
            </Button>
          </ScrollView>
        </Content>

        <Footer style={{height: 80}}>
          <Footer_Component {...props} />
        </Footer>
      </Container>
    );
  }
}
