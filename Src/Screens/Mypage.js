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
import Footer_Component from '../Components/Footer_Component';

export default function Mypage(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>마이페이지</Title>
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
          <View
            style={{
              flexDirection: 'row',
              marginLeft: '6%',
              marginTop: '2%',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'grey',
                borderRadius: 50,
                width: 100,
                height: 100,
              }}
            />
            <View style={{flexDirection: 'column', margin: '8%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                AamANH Cyx6aatap
              </Text>
              <Text note>cyx6aatap</Text>
              <Button
                backgroundColor="white"
                style={{height: 30, width: 100, marginTop: 10}}>
                <Text adjustsFontSizeToFit={true} style={{color: 'black'}}>
                  회원정보 수정
                </Text>
              </Button>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigate('Coupon')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  height: 100,
                  paddingLeft: 10,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text>COUPON</Text>
                  <Text style={{fontSize: 20, color: '#EB7225'}}>0</Text>
                </View>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: 50,
                    marginLeft: 50,
                    marginRight: 10,
                  }}
                  source={require('../images/content/mypage02.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('myPoint')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  height: 100,
                  marginLeft: 5,
                  paddingRight: 10,
                }}>
                <View style={{flexDirection: 'column', padding: 10}}>
                  <Text>POINT</Text>
                  <Text style={{fontSize: 20, color: '#EB7225'}}>15,000</Text>
                </View>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: 50,
                    marginLeft: 50,
                  }}
                  source={require('../images/content/mypage03.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: 'white',
            marginTop: 40,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 16}}>
            고객님은<Text style={{color: '#EB7225', fontSize: 15}}> GOLD</Text>{' '}
            회원입니다.
          </Text>

          <View style={{marginTop: 8}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14}}>다음 등급까지 필요한 구매금액</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>+22,500 ₮</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 4,
                paddingBottom: 24,
              }}>
              <Text style={{fontSize: 14}}>당월 구매금액</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>87,500 ₮</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: 'white',
            marginTop: 2,
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              현재 등급 혜택
            </Text>
            <Text note style={{marginLeft: 24}}>
              등급 유효기간:~2020-03-01
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 16,
              marginBottom: 16,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: 35,
                  height: 25,
                }}
                source={require('../images/content/mypage02.png')}
              />
              <View style={{flexDirection: 'column', marginLeft: 8}}>
                <Text style={{fontWeight: 'bold'}}>포인트적림</Text>
                <Text>구매금액 5%적립</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: 25,
                  height: 25,
                }}
                source={require('../images/content/mypage03.png')}
              />
              <View style={{flexDirection: 'column', marginLeft: 8}}>
                <Text style={{fontWeight: 'bold'}}>할인 쿠폰</Text>
                <Text>각 1매 (총 2매) 지급</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
            marginTop: 2,
            alignItems: 'center',
            paddingTop: 24,
            paddingBottom: 24,
          }}>
          <TouchableOpacity onPress={() => navigate('Order_List_Place')}>
            <View style={{flexDirection: 'column'}}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 60,
                  width: 60,
                  marginBottom: 8,
                }}
                source={require('../images/content/mypage04.png')}
              />
              <Text>주문내역</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Log_In')}>
            <View style={{flexDirection: 'column'}}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 60,
                  width: 60,
                  marginBottom: 8,
                }}
                source={require('../images/content/mypage05.png')}
              />
              <Text>쿠폰내역</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Mypage_Review')}>
            <View style={{flexDirection: 'column'}}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 60,
                  width: 60,
                  marginBottom: 8,
                }}
                source={require('../images/content/mypage06.png')}
              />
              <Text>구매후기</Text>
            </View>
          </TouchableOpacity>
        </View>

        <List
          style={{backgroundColor: 'white', marginTop: 8, paddingBottom: 24}}>
          <ListItem style={{justifyContent: 'space-between'}}>
            <Text>취소/교환/환불 조회</Text>
            <Icon name="chevron-forward" style={{color: '#EBEBEB'}} />
          </ListItem>
          <ListItem style={{justifyContent: 'space-between'}}>
            <Text>내 배송지 관리</Text>
            <Icon name="chevron-forward" style={{color: '#EBEBEB'}} />
          </ListItem>
          <ListItem style={{justifyContent: 'space-between'}}>
            <Text>판매자 주문관리</Text>
            <Icon name="chevron-forward" style={{color: '#EBEBEB'}} />
          </ListItem>
          <ListItem style={{justifyContent: 'space-between'}}>
            <Text>상품 Q&A / 판매자문의</Text>
            <Icon name="chevron-forward" style={{color: '#EBEBEB'}} />
          </ListItem>
          <ListItem style={{justifyContent: 'space-between'}}>
            <Text>고객센터</Text>
            <Icon name="chevron-forward" style={{color: '#EBEBEB'}} />
          </ListItem>
        </List>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}
