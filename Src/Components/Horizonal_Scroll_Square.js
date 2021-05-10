import React, {Component} from 'react';
import {AppRegistry, ScrollView, View, StyleSheet, Image} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    banner: require('../images/test_img/pe_3.png'),
  },
  {
    banner: require('../images/test_img/pe_1.png'),
  },
  {
    banner: require('../images/test_img/pe_2.png'),
  },
];

function Horizonal_Scroll_Square() {
  return <FlatListSlider data={images} imageKey={'banner'} local />;
}

export default Horizonal_Scroll_Square;
