import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
  Radio,
} from 'native-base';
import Footer_Component from '../Components/Footer_Component';

export default class Order_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }
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
            <Title style={{color: 'black', fontWeight: 'bold'}}>
              배송지 관리
            </Title>
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
          <View style={{left: '5%', marginTop: 16, marginBottom: 16}}>
            <Button
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                marginTop: 16,
                backgroundColor: 'white',
                width: '90%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                배송지 추가
              </Text>
            </Button>
          </View>

          <View
            style={{
              borderWidth: 1,
              marginTop: 16,
              borderRadius: 0,
              borderColor: 'gray',
            }}>
            <View
              style={{flexDirection: 'row', marginLeft: '5%', marginTop: 24}}>
              <Radio />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 16,
                  marginBottom: 24,
                }}>
                <View style={{marginBottom: 8}}>
                  <Text style={{fontWeight: 'bold'}}>홍길동(회사)</Text>
                </View>
                <Text note>010-0000-0000/010-0000-0000</Text>
                <Text>서울특별시 역삼동 테헤란로 2층</Text>
                <Text style={{fontSize: 14}}>test@gmail.com</Text>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <Button
                    style={{
                      borderRadius: 0,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'grey',
                      height: 35,
                      width: 70,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black'}}>수정</Text>
                  </Button>
                  <Button
                    style={{
                      borderRadius: 0,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'grey',
                      borderLeftWidth: 0,
                      height: 35,
                      width: 70,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black'}}>삭제</Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderRadius: 0,
              borderColor: 'gray',
              borderTopWidth: 0,
            }}>
            <View
              style={{flexDirection: 'row', marginLeft: '5%', marginTop: 24}}>
              <Radio />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 16,
                  marginBottom: 24,
                }}>
                <View style={{marginBottom: 8}}>
                  <Text style={{fontWeight: 'bold'}}>홍길동(회사)</Text>
                </View>
                <Text note>010-0000-0000/010-0000-0000</Text>
                <Text>서울특별시 역삼동 테헤란로 2층</Text>
                <Text style={{fontSize: 14}}>test@gmail.com</Text>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <Button
                    style={{
                      borderRadius: 0,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'grey',
                      height: 35,
                      width: 70,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black'}}>수정</Text>
                  </Button>
                  <Button
                    style={{
                      borderRadius: 0,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'grey',
                      borderLeftWidth: 0,
                      height: 35,
                      width: 70,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black'}}>삭제</Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderRadius: 0,
              borderColor: 'gray',
              borderTopWidth: 0,
            }}>
            <View
              style={{flexDirection: 'row', marginLeft: '5%', marginTop: 24}}>
              <Radio />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 16,
                  marginBottom: 24,
                }}>
                <View style={{marginBottom: 8}}>
                  <Text style={{fontWeight: 'bold'}}>홍길동(회사)</Text>
                </View>
                <Text note>010-0000-0000/010-0000-0000</Text>
                <Text>서울특별시 역삼동 테헤란로 2층</Text>
                <Text style={{fontSize: 14}}>test@gmail.com</Text>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <Button
                    style={{
                      borderRadius: 0,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'grey',
                      height: 35,
                      width: 70,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black'}}>수정</Text>
                  </Button>
                  <Button
                    style={{
                      borderRadius: 0,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'grey',
                      borderLeftWidth: 0,
                      height: 35,
                      width: 70,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black'}}>삭제</Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </Content>
        <Footer style={{height: 80}}>
          <Footer_Component {...props} />
        </Footer>
      </Container>
    );
  }
}
