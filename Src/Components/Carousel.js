import React, {Component} from 'react';
import {
  Image,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {Button, Icon} from 'native-base';

import Swiper from 'react-native-swiper';

export default class Carousel extends Component {
  render() {
    return (
      <Swiper
        autoplay={true}
        showsButtons={false}
        dotColor="rgba(0,0,0,0)"
        activeDotColor="rgba(0,0,0,0)"
        style={{height: 350, marginTop: -73}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail0');
            }}>
            <Image
              style={styles.slide}
              source={require('../images/test_img/banner01.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                bottom: '21.5%',
                left: 0,
                paddingLeft: 15,
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}>
              <Text style={{fontSize: 10, color: '#ffffff'}}>1/4</Text>
              <Button transparent style={{height: 33}}>
                <Icon style={{color: 'white'}} name="pause-sharp" />
              </Button>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail0');
            }}>
            <Image
              style={styles.slide}
              source={require('../images/test_img/banner01-1.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                bottom: '21.5%',
                left: 0,
                paddingLeft: 15,
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}>
              <Text style={{fontSize: 10, color: '#ffffff'}}>2/4</Text>
              <Button transparent style={{height: 33}}>
                <Icon style={{color: 'white'}} name="pause-sharp" />
              </Button>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail0');
            }}>
            <Image
              style={styles.slide}
              source={require('../images/test_img/banner01-2.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                bottom: '21.5%',
                left: 0,
                paddingLeft: 15,
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}>
              <Text style={{fontSize: 10, color: '#ffffff'}}>3/4</Text>
              <Button transparent style={{height: 33}}>
                <Icon style={{color: 'white'}} name="pause-sharp" />
              </Button>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail0');
            }}>
            <Image
              style={styles.slide}
              source={require('../images/test_img/banner01-3.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                bottom: '21.5%',
                left: 0,
                paddingLeft: 15,
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}>
              <Text style={{fontSize: 10, color: '#ffffff'}}>4/4</Text>
              <Button transparent style={{height: 33}}>
                <Icon style={{color: 'white'}} name="pause-sharp" />
              </Button>
            </View>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);

const styles = StyleSheet.create({
  slide: {
    resizeMode: 'contain',
    width: '100%',
  },
});
