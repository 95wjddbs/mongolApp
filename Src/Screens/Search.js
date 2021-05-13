import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  SectionList,
  Text,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Label,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Thumbnail,
  Footer,
} from 'native-base';

import Footer_Component from '../Components/Footer_Component';

export default function Search(props) {
  const {navigate, goBack} = props.navigation;
  return (
    <Container>
      <Header
        style={{
          backgroundColor: 'white',
          borderBottomWidth: 2,
          borderBottomColor: 'black',
        }}>
        <Left>
          <Button transparent onPress={() => goBack()}>
            <Icon name="arrow-back" style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
          <Item floatingLabel>
            <Label
              numberOfLines={1}
              style={{color: 'black', fontSize: 15, bottom: 10}}>
              Please enter a search term
            </Label>
            <Input />
          </Item>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => alert('검색 결과입니다.')}>
            <Thumbnail
              style={{height: 35, resizeMode: 'contain'}}
              source={{uri: 'https://i.postimg.cc/Qd7tww2b/menu-icon03.png'}}
            />
          </TouchableOpacity>
        </Right>
      </Header>

      <Content>
        <View style={{flexDirection: 'row', marginLeft: '5%', marginTop: 40}}>
          <Text style={{color: '#E87B0C'}}>Recent searches</Text>
          <Text style={{marginLeft: 40}}>recommend</Text>
        </View>
        <ScrollView>
          <View style={{width: '80%', marginTop: 20}}>
            <View
              style={{
                left: '5%',
                borderWidth: 1,
                borderColor: '#EDEDED',
                borderTopColor: 'black',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                  paddingBottom: 100,
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  backgroundColor: '#EBEBEB',
                  justifyContent: 'center',
                }}>
                <Text>Delete all</Text>
                <Icon name="close-outline" style={{color: '#CCCCCC'}} />
              </View>
            </View>
          </View>

          <View style={{width: '80%', marginTop: 20}}>
            <View
              style={{
                left: '5%',
                borderWidth: 1,
                borderColor: '#EDEDED',
                borderTopColor: 'black',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                  paddingBottom: 100,
                }}>
                <Text style={{padding: 10}}>R3PNNH</Text>
                <Icon
                  name="close-outline"
                  style={{color: '#E0E0E0', padding: 10}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  backgroundColor: '#EBEBEB',
                  justifyContent: 'center',
                }}>
                <Text>Delete all</Text>
                <Icon name="close-outline" style={{color: '#CCCCCC'}} />
              </View>
            </View>
          </View>
        </ScrollView>
      </Content>

      <Footer style={{height: 80}}>
        <Footer_Component />
      </Footer>
    </Container>
  );
}
