import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Font_Gradient = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#FF6753', '#FFBE47']}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}></Text>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    top: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '17.5%',
    paddingRight: '17.5%',
  },
  buttonText: {
    fontSize: 6,
  },
});

export default Font_Gradient;
