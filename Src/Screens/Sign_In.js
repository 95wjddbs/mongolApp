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
  Item,
  Input,
  List,
  ListItem,
  Radio,
} from 'native-base';
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

      <Content style={{flex: 1, backgroundColor: '#F5FAFB'}}>
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
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}
