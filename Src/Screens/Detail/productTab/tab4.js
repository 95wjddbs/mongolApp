import React, {Component} from 'react';
import {Image} from 'react-native';
import {Container, Content, Button, Text, View} from 'native-base';

function tab4(props) {
  return (
    <Container>
      <Content>
        <View
          style={{
            padding: 20,
            backgroundColor: '#F5FAFB',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Text style={{}}>adidas Xopoonon</Text>

          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: '#EBEBEB',
                backgroundColor: 'white',
                fontSize: 14,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              Contact
            </Text>
            <Text note style={{marginLeft: 16, fontSize: 14}}>
              7755-1111, 7745-5555, 88119900
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: '#EBEBEB',
                backgroundColor: 'white',
                fontSize: 14,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              address
            </Text>
            <Text
              note
              numberOfLines={1}
              adjustsFontSizeToFit={true}
              style={{marginLeft: 16, fontSize: 14}}>
              6arhron AyyprnnH 19-p xopoo NapaAokcblh 3yyH ta/n
            </Text>
          </View>

          <Button
            style={{
              backgroundColor: 'white',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../images/content/shop_img01.png')}
                style={{resizeMode: 'cover', width: 20, height: 20}}
              />
              <Text style={{marginLeft: 20, fontSize: 14}}>Seller Shop</Text>
            </View>
          </Button>

          <Button
            style={{
              marginTop: 4,
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 80,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <Text style={{color: 'black'}}>Add to Cart</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

export default tab4;
