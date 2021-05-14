import React, {Component} from 'react';
import Text from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    banner: require('../images/common/color.png'),
    desc: '1',
  },
  {
    banner: require('../images/common/color.png'),
    desc: '2',
  },
  {
    banner: require('../images/common/color.png'),
    desc: '3',
  },
];

function Flatlist_Slider_Review(props) {
  return (
    <FlatListSlider
      data={images}
      imageKey={'banner'}
      timer={5000}
      contentContainerStyle={{paddingHorizontal: 16}}
      indicatorContainerStyle={{}}
      indicatorActiveColor={'#F59171'}
      indicatorInActiveColor={'#ffffff'}
      indicatorActiveWidth={30}
      width={250}
      animation
      local
    />
  );
}

export default Flatlist_Slider_Review;
