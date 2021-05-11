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
      <Content padder style={{marginTop: 20}}>
        <View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontWeight: 'bold'}}>Woven Pocket Hoodie</Text>
            <Text style={{fontWeight: 'bold'}}>
              A relaxed hoodie for comfortable layering.
            </Text>
          </View>
        </View>
      </Content>
    </Container>
  );
}

export default tab1;
