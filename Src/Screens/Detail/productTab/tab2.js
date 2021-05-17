import React, {Component} from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Button, Text, View} from 'native-base';

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function tab2(props) {
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
  return (
    <Container>
      <Content style={{marginTop: 30}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            height: 60,
            backgroundColor: '#F5FAFB',
            left: '5%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Stars
              default={4.5}
              count={5}
              half={true}
              starSize={200}
              fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={'star-outline'}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon name={'star-half'} style={[styles.myStarStyle]} />
              }
            />
            <Text note style={{marginLeft: 16}}>
              4.3/5
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            paddingBottom: 16,
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 16,
          }}>
          <Text style={{fontWeight: 'bold'}}>
            Custmer reviews <Text style={{color: 'orange'}}>15</Text>
          </Text>
          <Text
            note
            style={{
              borderWidth: 1,
              padding: 4,
              paddingLeft: 8,
              paddingRight: 80,
            }}>
            Newest
          </Text>
        </View>

        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#F5FAFB',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>y***O</Text>
              <Text style={{marginLeft: 16}}>2020.03.09</Text>
            </View>
            <Text>Thank you for fast delivery</Text>
            <Text note numberOfLines={1} adjustsFontSizeToFit={true}>
              Thank you for fast delivery. I got the product within 7 days.
            </Text>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Text
                style={{
                  fontSize: 14,
                  backgroundColor: '#C99FFF',
                  borderRadius: 50,
                  padding: 2,
                  paddingLeft: 8,
                  paddingRight: 8,
                  color: '#A87BFF',
                }}>
                Product Satisfaction
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 16,
                  backgroundColor: '#ACFFF4',
                  borderRadius: 50,
                  padding: 2,
                  paddingLeft: 8,
                  paddingRight: 8,
                  color: '#6DDAFF',
                }}>
                The price is cheap
              </Text>
            </View>
          </View>

          <View style={{right: '90%'}}>
            <Stars
              default={4.0}
              count={5}
              half={true}
              starSize={200}
              fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={'star-outline'}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon name={'star-half'} style={[styles.myStarStyle]} />
              }
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#F5FAFB',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>y***O</Text>
              <Text style={{marginLeft: 16}}>2020.03.09</Text>
            </View>
            <Text>Thank you for fast delivery</Text>
            <Text note numberOfLines={1} adjustsFontSizeToFit={true}>
              Thank you for fast delivery. I got the product within 7 days.
            </Text>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Text
                style={{
                  fontSize: 14,
                  backgroundColor: '#C99FFF',
                  borderRadius: 50,
                  padding: 2,
                  paddingLeft: 8,
                  paddingRight: 8,
                  color: '#A87BFF',
                }}>
                Product Satisfaction
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 16,
                  backgroundColor: '#ACFFF4',
                  borderRadius: 50,
                  padding: 2,
                  paddingLeft: 8,
                  paddingRight: 8,
                  color: '#6DDAFF',
                }}>
                The price is cheap
              </Text>
            </View>
          </View>

          <View style={{right: '90%'}}>
            <Stars
              default={4.0}
              count={5}
              half={true}
              starSize={200}
              fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={'star-outline'}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon name={'star-half'} style={[styles.myStarStyle]} />
              }
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 5,
              paddingLeft: 12,
              paddingRight: 12,
              borderWidth: 1,
            }}>
            1
          </Text>
          <Text
            style={{
              textAlign: 'center',
              padding: 5,
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            2
          </Text>
          <Text
            style={{
              textAlign: 'center',
              padding: 5,
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            3
          </Text>
          <Text
            style={{
              textAlign: 'center',
              padding: 5,
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            4
          </Text>
          <Text
            style={{
              textAlign: 'center',
              padding: 5,
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            5
          </Text>

          <Image
            source={require('../../../images/common/border_num_r.png')}
            style={{resizeMode: 'cover', width: 30, height: 30, marginLeft: 16}}
          />
        </View>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  myStarStyle: {
    color: '#F0804F',
    backgroundColor: 'transparent',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontSize: 18,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});

export default tab2;
