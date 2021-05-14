import React, {Component} from 'react';
import Text from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    banner: require('../images/test_img/banner01.png'),
    desc: '1',
  },
  {
    banner: require('../images/test_img/banner01-1.png'),
    desc: '2',
  },
  {
    banner: require('../images/test_img/banner01-2.png'),
    desc: '3',
  },
  {
    banner: require('../images/test_img/banner01-3.png'),
    desc: '4',
  },
];

function Flatlist_Slider(props) {
  return (
    <FlatListSlider
      data={images}
      indicatorInActiveColor="rgba(0,0,0,0)"
      indicatorActiveColor="rgba(0,0,0,0)"
      imageKey={'banner'}
      timer={5000}
      onPress={() => {
        props.navigation.navigate('Detail0');
      }}
      local></FlatListSlider>
  );
}

export default Flatlist_Slider;
