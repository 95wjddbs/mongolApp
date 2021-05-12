import React, {Component} from 'react';
import {AppRegistry, ScrollView, View, StyleSheet, Image} from 'react-native';

class HorizonalScrollView extends Component {
  render() {
    return (
      <ScrollView
        contentOffset={{x: 85}}
        style={{marginTop: -120, width: '100%'}}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        onMomentumScrollEnd={() => {}}>
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
      </ScrollView>
    );
  }
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
export default HorizonalScrollView;
