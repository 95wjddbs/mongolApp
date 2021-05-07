import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail, List, ListItem } from 'native-base';

import Tab1 from './tabOne.js';


function tabTwo(props){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>          
        <Content style={{marginTop:30}}>
          <View>
            <List>
              <ListItem thumbnail>
                <Left style={{flexDirection:'column'}}>
                  <Text>2020</Text>
                  <Text>03.24</Text>
                  <Text>18:45:47</Text>
                </Left>
                <Body>
                  <Text note>REDH1345EA21</Text>
                  <Text>KB카드 (LG페이)</Text>
                  <Text>500,000T</Text>
                </Body>
              </ListItem>
            </List>
          </View>
        </Content>
 
      </Container>
    );
  }

  export default tabTwo;