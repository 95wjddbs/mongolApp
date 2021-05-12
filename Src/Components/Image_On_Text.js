import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Text, View} from 'native-base';

const Image_On_Text = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('productDetail1');
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: -270,
          }}>
          <View style={{flexDirection: 'column', width: '45%'}}>
            <View>
              <Image
                style={{width: '100%', resizeMode: 'contain'}}
                source={require('../images/test_img/pe_p1.png')}
              />
            </View>
            <View
              style={{
                bottom: '2%',
                left: '5%',
                width: '90%',
                marginTop: -260,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 13}}>
                Gold Bracelet
              </Text>
              <Text note style={{fontSize: 12}}>
                Ket (Chdndpc)
              </Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 14}}>
                3,111,920 ₮
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column', width: '45%'}}>
            <View>
              <Image
                style={{width: '100%', resizeMode: 'contain'}}
                source={require('../images/test_img/pe_p2.png')}
              />
            </View>
            <View
              style={{
                bottom: '2%',
                left: '5%',
                width: '90%',
                marginTop: -260,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 13}}>
                Bold Gold bracelet
              </Text>
              <Text note style={{fontSize: 12}}>
                Ket (Chdndpc)
              </Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 14}}>
                111,920 ₮
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: -200,
          }}>
          <View style={{flexDirection: 'column', width: '45%'}}>
            <View>
              <Image
                style={{width: '100%', resizeMode: 'contain'}}
                source={require('../images/test_img/pe_p3.png')}
              />
            </View>
            <View
              style={{
                bottom: '2%',
                left: '5%',
                width: '90%',
                marginTop: -260,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text
                style={{marginTop: 10, fontWeight: 'bold', fontSize: 13}}
                numberOfLines={1}>
                18K Rose Gold Venetian Travel lode
              </Text>
              <Text note style={{fontSize: 12}}>
                Ket (Chdndpc)
              </Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 14}}>
                22,111,920 ₮
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column', width: '45%'}}>
            <View>
              <Image
                style={{width: '100%', resizeMode: 'contain'}}
                source={require('../images/test_img/pe_p4.png')}
              />
            </View>
            <View
              style={{
                bottom: '2%',
                left: '5%',
                width: '90%',
                marginTop: -260,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Text
                numberOfLines={1}
                style={{marginTop: 10, fontWeight: 'bold', fontSize: 13}}>
                L'OCCITANE b3nfnnH bracelet
              </Text>
              <Text note style={{fontSize: 12}}>
                Ket (Chdndpc)
              </Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 14}}>
                111,920 ₮
              </Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: '25%', resizeMode: 'contain', marginTop: -80}}
            source={require('../images/content/viewmore01.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Image_On_Text;
