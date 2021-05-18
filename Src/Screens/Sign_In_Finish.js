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
  Separator,
  CheckBox,
} from 'native-base';
import Footer_Component from '../Components/Footer_Component';

export default function Sign_In_Finish(props) {
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

      <Content>
        <View style={{width: '100%', height: 600, justifyContent: 'center'}}>
          <View style={{marginLeft: '5%'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', marginBottom: 24}}>
              회원가입 완료
            </Text>

            <Text>GSTORE 회원가입이 완료되었습니다.</Text>
            <Text>로그인하시고 많은 혜택과 서비스를 누려보세요!</Text>
          </View>
          <Button
            onPress={() => navigate('MainPage')}
            style={{
              width: '90%',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'black',
              marginTop: 80,
              marginBottom: 8,
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              홈으로
            </Text>
          </Button>
          <Button
            onPress={() => navigate('Sign_In')}
            style={{
              width: '90%',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#332F2E',
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              LOGIN
            </Text>
          </Button>
        </View>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component {...props} />
      </Footer>
    </Container>
  );
}
