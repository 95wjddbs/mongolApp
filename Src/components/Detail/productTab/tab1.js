import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right, View, Thumbnail, List, ListItem } from 'native-base';

function tab1(props){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>       
        <Content padder style={{marginTop:20}}>
          <View>
            <View style={{marginBottom:20}}>
                <Text style={{fontWeight:'bold'}}>Woven Pocket Hoodie</Text>
                <Text style={{fontWeight:'bold'}}>A relaxed hoodie for comfortable layering.</Text>
            </View>
                <Text>
                    The times are changing. As we become more aware of our surroundings, our impact and our identities, we look to the future to help us inform the present.
                    The adidas Woven Pocket Hoodie takes a forward-thinking approach and seamlessly merges function with fashion. An essential layer for exploring the modern urban landscape.
                </Text>
          </View>
        </Content>

      </Container>
    );
  }

  export default tab1;