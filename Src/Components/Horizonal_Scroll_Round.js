import React, {Component} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Image,
} from 'react-native';

export default function Horizonal_Scroll_Round(props) {
  const {navigate, goBack} = props.navigation;
  return (
    <ScrollView
      contentOffset={{x: 85}}
      style={{marginTop: -120, width: '100%'}}
      horizontal={true}>
      <TouchableOpacity onPress={() => navigate('Brand')}>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imgStyle}
            source={require('../images/test_img/br_1.png')}
          />
          <Image
            style={styles.imgStyle}
            source={require('../images/test_img/br_2.png')}
          />
          <Image
            style={styles.imgStyle}
            source={require('../images/test_img/br_3.png')}
          />
          <Image
            style={styles.imgStyle}
            source={require('../images/test_img/br_4.png')}
          />
          <Image
            style={styles.imgStyle}
            source={require('../images/test_img/br_5.png')}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    flex: 1,
    resizeMode: 'contain',
    width: 100,
    marginLeft: 8,
    marginRight: 8,
  },
});
