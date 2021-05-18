import React, {Component, useState} from 'react';
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
  Item,
  Input,
  List,
  ListItem,
  Radio,
  Separator,
  CheckBox,
} from 'native-base';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Footer_Component from '../Components/Footer_Component';

export default function Sign_In(props) {
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
          <Title style={{color: 'black', fontWeight: 'bold'}}>회원가입</Title>
        </Body>
        <Right style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('MainPage')}>
            <Image
              source={require('../images/common/m_icon06.png')}
              style={{
                resizeMode: 'cover',
                width: 30,
                height: 30,
                marginRight: 16,
              }}
            />
          </TouchableOpacity>
        </Right>
      </Header>

      <Content style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20}}>GSTORE에 회원가입하시고</Text>
          <Text style={{fontSize: 20}}>많은 혜택을 누려보세요.</Text>
          <Text style={{fontSize: 12, color: 'grey'}}>
            판매자 회원은 일반 회원 가입 후 신청 가능합니다.
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 2,
            width: '90%',
            left: '5%',
          }}>
          <Text style={{fontSize: 14, color: 'orange', marginBottom: 4}}>
            필수 입력항목 *
          </Text>
        </View>

        <View style={{marginTop: 16}}>
          <Text style={{marginLeft: '5%'}}>
            아이디 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <ListItem noBorder>
            <Item regular style={{paddingLeft: 5, marginTop: -12}}>
              <Input
                style={{fontSize: 14, color: '#FBFBFB'}}
                placeholder="띄어쓰기 없이 영/숫자 6-10자"
              />
            </Item>
          </ListItem>
        </View>

        <View style={{marginTop: 8}}>
          <Text style={{marginLeft: '5%'}}>
            패스워드 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <ListItem noBorder>
            <Item regular style={{paddingLeft: 5, marginTop: -12}}>
              <Input
                style={{fontSize: 14, color: '#FBFBFB'}}
                placeholder="6-15자의 영문 대소문자, 숫자 및 특수문자 조합"
              />
            </Item>
          </ListItem>
        </View>

        <View style={{marginTop: 8}}>
          <Text style={{marginLeft: '5%'}}>
            패스워드 확인 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <ListItem noBorder>
            <Item regular style={{paddingLeft: 5, marginTop: -12}}>
              <Input
                style={{fontSize: 14, color: '#FBFBFB'}}
                placeholder="패스워드를 한번 더 입력하세요."
              />
            </Item>
          </ListItem>
        </View>

        <View style={{marginTop: 8}}>
          <Text style={{marginLeft: '5%'}}>
            이름 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <ListItem noBorder>
            <Item regular style={{paddingLeft: 5, marginTop: -12}}>
              <Input
                style={{fontSize: 14, color: '#FBFBFB'}}
                placeholder="이름을 입력하세요."
              />
            </Item>
          </ListItem>
        </View>

        <View style={{left: '5%'}}>
          <Text>
            성별 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 8}}>
            <View style={{flexDirection: 'row'}}>
              <Radio selected={true} selectedColor={'orange'} />
              <Text>남</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 60}}>
              <Radio />
              <Text>여</Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 8}}>
          <Text style={{marginLeft: '5%'}}>
            연락처1 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <ListItem noBorder>
            <Item regular style={{paddingLeft: 5, marginTop: -12}}>
              <Input
                style={{fontSize: 14, color: '#FBFBFB'}}
                placeholder="연락처, 휴대폰 번호 중 하나라도 입력해 주세요"
              />
            </Item>
          </ListItem>
        </View>

        <View style={{marginTop: 8}}>
          <Text style={{marginLeft: '5%'}}>
            연락처2 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <ListItem noBorder>
            <Item regular style={{paddingLeft: 5, marginTop: -12}}>
              <Input
                style={{fontSize: 14, color: '#FBFBFB'}}
                placeholder="연락처, 휴대폰 번호 중 하나라도 입력해 주세요"
              />
            </Item>
          </ListItem>
        </View>

        <View
          style={{
            borderBottomWidth: 2,
            width: '90%',
            left: '5%',
            marginTop: 4,
          }}>
          <Text style={{fontSize: 14, color: 'orange', marginBottom: 4}}>
            선택 입력항목 *
          </Text>
        </View>

        <View style={{marginTop: 16}}>
          <Text style={{marginLeft: '5%'}}>
            닉네임 <Text style={{color: 'orange'}}>*</Text>
          </Text>
          <ListItem noBorder>
            <Item regular style={{paddingLeft: 5, marginTop: -12}}>
              <Input
                style={{fontSize: 14, color: '#FBFBFB'}}
                placeholder="띄어쓰기 없이 영/숫자 6-10자."
              />
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
                    fontSize: 14,
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
            <Input
              placeholder="상세주소"
              style={{fontSize: 14, paddingLeft: '4.8%'}}
            />
          </Item>
        </View>

        <Text style={{marginTop: 20, marginLeft: '5%'}}>
          회원사진{' '}
          <Text note style={{fontSize: 12}}>
            10MB이하의 PNG, GIF, JPG파일만 등록가능합니다.
          </Text>
        </Text>

        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            width: '90%',
            height: 60,
            backgroundColor: 'black',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/content/photo_w.png')}
            style={{resizeMode: 'contain', width: 20, height: 20}}
          />
          <Text style={{color: 'white', marginLeft: 8, fontSize: 14}}>
            사진 등록하기
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#EBEBEB',
            backgroundColor: 'white',
            width: '90%',
            height: 250,
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('../images/content/mypage08.png')}
              style={{
                resizeMode: 'cover',
                width: 200,
                height: 200,
              }}
            />
            <Image
              source={require('../images/common/delete01_w.png')}
              style={{
                resizeMode: 'cover',
                width: 40,
                height: 40,
                position: 'absolute',
                right: 0,
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F5FAFB',
            width: '100%',
            height: 16,
          }}></View>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'grey',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 8,
          }}>
          <Text>쇼핑몰 회원 서비스 약관 동의</Text>
          <Text note>아래 항목에 동의를 하면 회원가입이 가능합니다.</Text>
        </View>

        <Collapse isExpanded={false}>
          <CollapseHeader style={{height: 60}}>
            <Separator
              style={{
                backgroundColor: 'white',
                justifyContent: 'space-between',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 16,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CheckBox checked={true} style={{height: 22, width: 22}} />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                      marginLeft: 20,
                    }}>
                    전체 동의
                  </Text>
                </Left>
              </View>
            </Separator>
          </CollapseHeader>
        </Collapse>

        <Collapse isExpanded={false}>
          <CollapseHeader style={{height: 60}}>
            <Separator
              style={{
                backgroundColor: '#FBFBFB',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox style={{height: 22, width: 22}} />
                <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                  GSTORE 이용약관 (필수)
                </Text>
              </Left>
              <Icon
                name="chevron-down"
                style={{color: 'grey', marginRight: 16}}
              />
            </Separator>
          </CollapseHeader>
        </Collapse>

        <Collapse isExpanded={false}>
          <CollapseHeader style={{height: 60}}>
            <Separator
              style={{
                backgroundColor: '#FBFBFB',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox style={{height: 22, width: 22}} />
                <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                  전자금융 서비스 이용약관(필수)
                </Text>
              </Left>
              <Icon
                name="chevron-down"
                style={{color: 'grey', marginRight: 16}}
              />
            </Separator>
          </CollapseHeader>
        </Collapse>

        <Collapse isExpanded={false}>
          <CollapseHeader style={{height: 60}}>
            <Separator
              style={{
                backgroundColor: '#FBFBFB',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox style={{height: 22, width: 22}} />
                <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                  개인정보 수집 및 이용약관 (필수)
                </Text>
              </Left>
              <Icon
                name="chevron-down"
                style={{color: 'grey', marginRight: 16}}
              />
            </Separator>
          </CollapseHeader>
        </Collapse>

        <Collapse isExpanded={false}>
          <CollapseHeader style={{height: 60}}>
            <Separator
              style={{
                backgroundColor: '#FBFBFB',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox style={{height: 22, width: 22}} />
                <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                  이메일 수신 동의(선택)
                </Text>
              </Left>
              <Icon
                style={{fontSize: 24, marginRight: 16, color: 'grey'}}
                name="chevron-down"
                type="Ionicons"
              />
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
                marginLeft: 'auto',
                marginRight: 'auto',
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
          </CollapseBody>
        </Collapse>

        <Collapse isExpanded={false}>
          <CollapseHeader style={{height: 60}}>
            <Separator
              style={{
                backgroundColor: '#FBFBFB',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox style={{height: 22, width: 22}} />
                <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                  SMS 수신 동의 (선택)
                </Text>
              </Left>
              <Icon
                name="chevron-down"
                style={{color: 'grey', marginRight: 16}}
              />
            </Separator>
          </CollapseHeader>
        </Collapse>

        <View
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderBottomWidth: 1,
            marginBottom: 40,
          }}></View>

        <Button
          onPress={() => navigate('Sign_In_Finish')}
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
            가입하기
          </Text>
        </Button>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
}
