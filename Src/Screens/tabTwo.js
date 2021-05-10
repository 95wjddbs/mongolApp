import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  Container,
  Content,
  Text,
  Left,
  Body,
  View,
  List,
  ListItem,
} from 'native-base';

import Tab1 from './tabOne.js';

function tabTwo(props) {
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
  return (
    <Container>
      <Content style={{marginTop: 30}}>
        <View>
          <List>
            <ListItem thumbnail>
              <Left style={{flexDirection: 'column'}}>
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
