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

export default class Order_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
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
              주문/결제
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
          <View style={{backgroundColor: '#F5FAFB', marginBottom: 16}}>
            <Text style={{fontSize: 8}}></Text>
          </View>

          <View>
            <Collapse isExpanded={false}>
              <CollapseHeader style={{height: 60}}>
                <Separator
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 10,
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                    배송지 정보
                  </Text>
                  <Icon name="chevron-down" style={{color: 'grey'}} />
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <View style={{marginTop: -16}}>
                  <Text style={{marginLeft: '5%'}}>배송지 명</Text>
                  <ListItem noBorder>
                    <Item regular style={{paddingLeft: 5, marginTop: -12}}>
                      <Input placeholder="집" />
                    </Item>
                  </ListItem>
                </View>

                <View style={{marginTop: -8}}>
                  <Text style={{marginLeft: '5%'}}>수령인</Text>
                  <ListItem noBorder>
                    <Item regular style={{paddingLeft: 5, marginTop: -12}}>
                      <Input placeholder="홍길동" />
                    </Item>
                  </ListItem>
                </View>

                <View style={{marginTop: -8}}>
                  <Text style={{marginLeft: '5%'}}>이메일</Text>
                  <ListItem noBorder>
                    <Item regular style={{paddingLeft: 5, marginTop: -12}}>
                      <Input placeholder="test@gmail.com" />
                    </Item>
                  </ListItem>
                </View>

                <View style={{marginTop: -8}}>
                  <Text style={{marginLeft: '5%'}}>연락처1</Text>
                  <ListItem noBorder>
                    <Item regular style={{paddingLeft: 5, marginTop: -12}}>
                      <Input placeholder="000-0000-0000" />
                    </Item>
                  </ListItem>
                </View>

                <View style={{marginTop: -8}}>
                  <Text style={{marginLeft: '5%'}}>연락처2</Text>
                  <ListItem noBorder>
                    <Item regular style={{paddingLeft: 5, marginTop: -12}}>
                      <Input placeholder="000-0000-0000." />
                    </Item>
                  </ListItem>
                </View>

                <View style={{marginTop: -8}}>
                  <Text style={{marginLeft: '5%'}}>배송지 주소</Text>
                  <ListItem noBorder>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Item regular style={{width: '75%'}}>
                        <Input
                          placeholder="배송지 검색"
                          style={{
                            color: 'rgba(250, 250, 250, 0.6)',
                            fontSize: 10,
                            paddingLeft: '5%',
                          }}
                        />
                      </Item>
                      <View style={{width: '20%', marginLeft: 10}}>
                        <Button
                          style={{
                            borderRadius: 0,
                            backgroundColor: 'black',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            width: '112%',
                          }}>
                          <Text>검색</Text>
                        </Button>
                      </View>
                    </View>
                  </ListItem>
                  <Item
                    regular
                    style={{marginLeft: '4.8%', marginTop: -12, width: '90%'}}>
                    <Input placeholder="" />
                  </Item>

                  <View
                    style={{
                      marginTop: 8,
                      flexDirection: 'row',
                      alignItems: 'center',
                      left: '10%',
                    }}>
                    <CheckBox
                      onClick={() => {
                        this.setState({
                          isChecked: !this.state.isChecked,
                        });
                      }}
                      isChecked={this.state.isChecked}
                    />
                    <Text style={{marginLeft: 8}}>
                      위 배송지 정보를 저장합니다.
                    </Text>
                  </View>

                  <Button
                    onPress={() => navigate('Order_List_Place')}
                    style={{
                      marginTop: 16,
                      backgroundColor: 'black',
                      width: '100%',
                      height: 80,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      확인
                    </Text>
                  </Button>
                </View>
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{backgroundColor: '#F5FAFB', marginBottom: 16}}>
            <Text style={{fontSize: 8}}></Text>
          </View>

          <View>
            <Collapse isExpanded={true}>
              <CollapseHeader style={{height: 60}}>
                <Separator
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 10,
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                    주문 상품정보
                  </Text>
                  <Icon name="chevron-down" style={{color: 'grey'}} />
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <TouchableOpacity onPress={() => navigate('productDetail1')}>
                  <View
                    padder
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderColor: '#F1F0F0',
                      borderBottomWidth: 1,
                      borderTopWidth: 1,
                    }}>
                    <Image
                      source={require('../images/common/color.png')}
                      style={{resizeMode: 'cover', width: 100, height: 100}}
                    />
                    <View
                      style={{
                        marginLeft: 24,
                      }}>
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
                    padder
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderColor: '#F1F0F0',
                      borderBottomWidth: 1,
                    }}>
                    <Image
                      source={require('../images/common/color.png')}
                      style={{resizeMode: 'cover', width: 100, height: 100}}
                    />
                    <View
                      style={{
                        marginLeft: 24,
                      }}>
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
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{backgroundColor: '#F5FAFB', marginBottom: 16}}>
            <Text style={{fontSize: 8}}></Text>
          </View>

          <View>
            <Collapse isExpanded={false}>
              <CollapseHeader style={{height: 60}}>
                <Separator
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 10,
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                    포인트/쿠폰 사용
                  </Text>
                  <Icon name="chevron-down" style={{color: 'grey'}} />
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <View style={{marginTop: -16}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingRight: '5%',
                    }}>
                    <Text style={{marginLeft: '5%'}}>포인트 사용</Text>
                    <Text style={{color: '#E0E0E0', fontSize: 13}}>
                      사용 가능한 포인트{'  '}
                      <Text style={{color: 'red', fontWeight: 'bold'}}>
                        100,000T
                      </Text>
                    </Text>
                  </View>
                  <ListItem noBorder>
                    <Item regular style={{paddingLeft: 5, marginTop: -12}}>
                      <Input placeholder="" />
                    </Item>
                  </ListItem>
                </View>

                <View style={{marginTop: 24}}>
                  <Text style={{marginLeft: '5%'}}>쿠폰 사용</Text>
                  <ListItem noBorder>
                    <Item regular style={{paddingLeft: 5, marginTop: -12}}>
                      <Input
                        placeholder="사용가능한 쿠폰 리스트"
                        style={{color: '#F1F0F0', fontSize: 12}}
                      />
                      <Icon
                        name="chevron-down"
                        style={{fontSize: 18, color: 'grey'}}
                      />
                    </Item>
                  </ListItem>
                </View>
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{backgroundColor: '#F5FAFB', marginBottom: 16}}>
            <Text style={{fontSize: 8}}></Text>
          </View>

          <View>
            <Collapse isExpanded={false}>
              <CollapseHeader style={{height: 60}}>
                <Separator
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 10,
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                    결제 방법 선택
                  </Text>
                  <Icon name="chevron-down" style={{color: 'grey'}} />
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <View
                  style={{
                    padding: 20,
                    width: '90%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: '#F1F0F0',
                    borderWidth: 1,
                    left: '5%',
                  }}>
                  <Image
                    source={require('../images/content/pay01.png')}
                    style={{resizeMode: 'cover', width: 40, height: 40}}
                  />
                  <View
                    style={{
                      paddingLeft: 20,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>
                      데이터 또는 QR코드를 다운하십시오
                    </Text>
                    <Text style={{marginTop: 8, fontSize: 13}}>
                      계정으로 결제 송급 인터넷 뱅킹, 모바일 뱅킹
                    </Text>
                    <Text style={{fontSize: 13}}>
                      QR코드 및 계정으로 결제하십시오.
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    padding: 20,
                    width: '90%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: '#F1F0F0',
                    borderWidth: 1,
                    left: '5%',
                    marginTop: 8,
                  }}>
                  <Image
                    source={require('../images/content/pay02.png')}
                    style={{resizeMode: 'contain', width: 40, height: 40}}
                  />
                  <View
                    style={{
                      paddingLeft: 20,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>카드</Text>
                    <Text style={{marginTop: 8, fontSize: 13}}>
                      은행 카드를 제외한 모든 직불카드, 신용카드,
                    </Text>
                    <Text style={{fontSize: 13}}>
                      외국 및 국내 카드로 지불하십시오.
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    padding: 20,
                    width: '90%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: '#F1F0F0',
                    borderWidth: 1,
                    left: '5%',
                    marginTop: 8,
                  }}>
                  <Image
                    source={require('../images/content/pay03.png')}
                    style={{resizeMode: 'cover', width: 40, height: 40}}
                  />
                  <View
                    style={{
                      paddingLeft: 20,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>카드(칸뱅크)</Text>
                    <Text style={{marginTop: 8, fontSize: 13}}>
                      은행 카드로 결제하려면 여기를 클릭하십시오.
                    </Text>
                    <Text style={{fontSize: 13}}>인터넷 PIN 필요</Text>
                  </View>
                </View>

                <View
                  style={{
                    padding: 20,
                    width: '90%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: '#F1F0F0',
                    borderWidth: 1,
                    left: '5%',
                    marginTop: 8,
                    marginBottom: 24,
                  }}>
                  <Image
                    source={require('../images/content/pay04.png')}
                    style={{resizeMode: 'cover', width: 40, height: 40}}
                  />
                  <View
                    style={{
                      paddingLeft: 20,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>PAYPAL </Text>
                    <Text style={{marginTop: 8, fontSize: 13}}>
                      paypal을 사용합니다.
                    </Text>
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{backgroundColor: '#F5FAFB', marginBottom: 16}}>
            <Text style={{fontSize: 8}}></Text>
          </View>

          <View padder>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>쿠폰 및 포인트 할인</Text>
              <Text>-2,000T</Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>배송비</Text>
              <Text>5,000T</Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>총 상품금액</Text>
              <Text>14,390T</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 24,
                borderTopWidth: 2,
                borderColor: 'grey',
                paddingTop: 24,
              }}>
              <Text style={{color: '#F58966'}}>최종 결제금액</Text>
              <Text style={{color: '#FF5240'}}>17,390T</Text>
            </View>
          </View>

          <Button
            onPress={() => navigate('Order_List_Pay')}
            style={{
              backgroundColor: '#F58966',
              width: '100%',
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 24,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              결제하기
            </Text>
          </Button>
        </Content>
        <Footer style={{height: 80}}>
          <Footer_Component />
        </Footer>
      </Container>
    );
  }
}
