import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, ListView} from 'react-native';

class Product_Item extends Component {
  render() {
    return (
      <View style={styles.ProductContainer}>
        <Image style={styles.ImgContent} source={{uri: this.props.pt_image}} />
        <View style={styles.TextContent}>
          <Text style={styles.price}>{this.props.price}</Text>
          <Text style={styles.sub}>{this.props.sub}</Text>
          <Text style={styles.third}>{this.props.third}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ProductContainer: {
    width: '50%',
    paddingTop: 10,
  },
  ImgContent: {
    height: 190,
    resizeMode: 'contain',
  },
  TextContent: {
    flexDirection: 'column',
    padding: 10,
  },
  price: {fontSize: 18, fontWeight: 'bold'},
  sub: {fontSize: 15},
  third: {fontSize: 13},
});

export default Product_Item;
