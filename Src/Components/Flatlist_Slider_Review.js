import React, {Component} from 'react';
import Text from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    banner: require('../images/test_img/productDetail.png'),
    desc: '1',
  },
  {
    banner: require('../images/test_img/productDetail.png'),
    desc: '2',
  },
  {
    banner: require('../images/test_img/productDetail.png'),
    desc: '3',
  },
];

function Flatlist_Slider_Review(props) {
  return (
    <FlatListSlider
      data={images}
      imageKey={'banner'}
      timer={5000}
      indicatorActiveColor={'#F59171'}
      indicatorInActiveColor={'#EBEBEB'}
      indicatorActiveWidth={30}
      animation
      height={400}
      onPress={() => {
        props.navigation.navigate('productDetail1');
      }}
      local
    />
  );
}

export default Flatlist_Slider_Review;
