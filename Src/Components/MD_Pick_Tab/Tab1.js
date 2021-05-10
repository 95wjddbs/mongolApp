import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
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

function tab1(props) {
  return (
    <Container>
      <Content>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Image
            style={{resizeMode: 'contain', width: '45%', marginTop: -220}}
            source={require('../../images/test_img/re_1.png')}
          />
          <Image
            style={{resizeMode: 'contain', width: '45%', marginTop: -220}}
            source={require('../../images/test_img/re_2.png')}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Image
            style={{resizeMode: 'contain', width: '45%', marginTop: -360}}
            source={require('../../images/test_img/re_4.png')}
          />
          <Image
            style={{resizeMode: 'contain', width: '45%', marginTop: -360}}
            source={require('../../images/test_img/re_3.png')}
          />
        </View>
      </Content>
    </Container>
  );
}

export default tab1;
