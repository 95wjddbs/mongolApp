import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import {Container, Content, Button, Text, View} from 'native-base';

import Horizonal_Scroll_Square from '../../../Components/Horizonal_Scroll_Square';

function tab1(props) {
  return (
    <Container style={{height: '100%'}}>
      <Content style={{marginTop: 20}}>
        <ScrollView>
          <View style={{marginLeft: 16, marginRight: 16}}>
            <View style={{marginBottom: 20}}>
              <Text style={{fontWeight: 'bold'}}>Woven Pocket Hoodie</Text>
              <Text style={{fontWeight: 'bold'}}>
                A relaxed hoodie for comfortable layering.
              </Text>
            </View>
            <Text>
              The times are changing. As we become more aware of our
              surroundings, our impact and our identities, we look to the future
              to help us inform the present. The adidas Woven Pocket Hoodie
              takes a forward-thinking approach and seamlessly merges function
              with fashion. An essential layer for exploring the modern urban
              landscape.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#F5FAFB',
              paddingTop: 24,
              marginTop: 24,
              paddingBottom: 16,
            }}>
            <Text
              style={{
                borderBottomWidth: 1,
                paddingBottom: 16,
                marginLeft: 16,
                marginRight: 16,
                fontWeight: 'bold',
              }}>
              Y3yyn3tYYA
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
                marginLeft: 32,
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text fontWeight="bold" style={{marginTop: 4}}>
                  3arbap & 3opnynanT
                </Text>
                <Text style={{marginTop: 4}}>Xync</Text>
                <Text style={{marginTop: 4}}>Hachbl aHrnnan</Text>
                <Text style={{marginTop: 4}}>YnNpan</Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                }}>
                <Text note style={{marginLeft: 32, marginTop: 4}}>
                  tops
                </Text>
                <Text note style={{marginLeft: 32, marginTop: 4}}>
                  3part3n
                </Text>
                <Text note style={{marginLeft: 32, marginTop: 4}}>
                  Tom xyH
                </Text>
                <Text note style={{marginLeft: 32, marginTop: 4}}>
                  Xabap/Hamap
                </Text>
              </View>
            </View>

            <View style={{borderBottomWidth: 1, margin: 16}}></View>
          </View>

          <Button
            transparent
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              marginTop: 8,
              marginLeft: '56%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../images/content/alim01.png')}
                style={{
                  resizeMode: 'cover',
                  width: 12,
                  height: 15,
                  marginLeft: 16,
                  marginRight: 8,
                }}
              />
              <Text style={{color: 'grey', marginRight: 16}}>
                Report product
              </Text>
            </View>
          </Button>

          <View style={{marginTop: 40, marginBottom: 40}}>
            <Text style={{marginLeft: 16, fontWeight: 'bold'}}>
              Tectan 6apaaHyyA
            </Text>
            <Horizonal_Scroll_Square />
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}

export default tab1;
