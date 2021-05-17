import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Detail_Image = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('productDetail1')}
      style={{position: 'absolute'}}>
      <View
        style={{
          width: 190,
          height: 190,
          backgroundColor: 'transparent',
          marginLeft: 8,
        }}></View>
    </TouchableOpacity>
  );
};
class Product_Item extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.ProductContainer}>
        <Image style={styles.ImgContent} source={{uri: this.props.pt_image}} />
        <Detail_Image />
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
    paddingBottom: 20,
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
