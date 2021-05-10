import React, {Component} from 'react';
import {AppRegistry, ScrollView, View, StyleSheet, Image} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    banner: require('../images/test_img/banner01.png'),
    dsec: '1/4',
  },
  {
    banner: require('../images/test_img/banner01-1.png'),
  },
  {
    banner: require('../images/test_img/banner01-2.png'),
  },
  {
    banner: require('../images/test_img/banner01-3.png'),
  },
];

function Flatlist_Slider(navigation) {
  return (
    <FlatListSlider
      data={images}
      showsButtons={false}
      indicatorInActiveColor="rgba(0,0,0,0)"
      indicatorActiveColor="rgba(0,0,0,0)"
      imageKey={'banner'}
      timer={5000}
      onPress={() => {
        navigation.navigate('Detail0');
      }}
      local></FlatListSlider>
  );
}

export default Flatlist_Slider;
