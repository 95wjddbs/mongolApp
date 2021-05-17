import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

// import {Button} from 'native-base';

import {useNavigation} from '@react-navigation/native';

const Square_List = [
  {
    id: 1,
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117904224-ea30a200-b30b-11eb-9c43-51651c24892e.png',
    price: 'O HUI Purchase Apprec...',
    sub: 'Free gift random (Until sold out)',
  },
  {
    id: 2,
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117904228-eb61cf00-b30b-11eb-83ee-37194ef38eea.png',
    price: 'airvita Purchase Appre....',
    sub: 'Free gift random (Until sold out)',
  },
  {
    id: 3,
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117904229-eb61cf00-b30b-11eb-8c14-21b8bbf6aacf.png',
    price: 'Gift Event',
    sub: 'Free gift random (Until sold out)',
  },
];

const Detail_Image = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail0')}
      style={{position: 'absolute'}}>
      <View
        style={{
          width: 180,
          height: 180,
          backgroundColor: 'transparent',
          marginLeft: 15,
          marginTop: 10,
        }}></View>
    </TouchableOpacity>
  );
};

class Square_Item extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.ProductContainer}>
          {Square_List.map((container_Item, index) => (
            <Image
              style={[
                styles.container_Item,
                index % 2 === 1 && {marginLeft: 15, width: 180, height: 180},
              ]}
              source={{uri: this.props.pt_image}}
            />
          ))}
          <Detail_Image />

          <View style={styles.TextContent}>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.price}>
              {this.props.price}
            </Text>
            <Text adjustsFontSizeToFit={true} style={styles.sub}>
              {this.props.sub}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

function Horizonal_Scroll_Square(props) {
  const renderItem = ({item}) => {
    return (
      <Square_Item
        key={item.id}
        pt_image={item.pt_image1}
        price={item.key}
        sub={item.sub}
        third={item.third}
      />
    );
  };

  const Add_Product = products => {
    return products.map(product => {
      return Object.assign(product, {key: product.price});
    });
  };

  return (
    <FlatList
      horizontal={true}
      data={Add_Product(Square_List)}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  ProductContainer: {paddingTop: 10},
  TextContent: {
    marginTop: 10,
    flexDirection: 'column',
    left: 15,
  },
  price: {fontSize: 16, fontWeight: 'bold'},
  sub: {fontSize: 13, color: 'grey'},
});

export default Horizonal_Scroll_Square;
