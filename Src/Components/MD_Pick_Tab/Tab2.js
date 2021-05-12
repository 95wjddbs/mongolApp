import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Tab_List = [
  {
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750382-46cd8780-b24e-11eb-841a-ea518ce2dccb.png',
    price: '239,000₮',
    sub: 'WB COLOR',
    third: '6antfgeqaseed mansdsda',
  },
  {
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750386-47feb480-b24e-11eb-8a3c-a440cd6026e3.png',
    price: '211,000₮',
    sub: 'TERREX AGRAVIC TR W',
    third: '6antfgeqaseed mansdsda',
  },
  {
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750389-48974b00-b24e-11eb-92e3-2ad09672dbe7.png',
    price: '998,900₮',
    sub: 'ELLA',
    third: '6antfgeqaseed mansdsda',
  },
  {
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750390-492fe180-b24e-11eb-9a08-120ffe541ef6.png',
    price: '425,000₮',
    sub: 'Marvin Suede Mini',
    third: '6antfgeqaseed mansdsda',
  },
];

class Tab_Item extends Component {
  render() {
    return (
      <View style={styles.ProductContainer}>
        {Tab_List.map((container_Item, index) => (
          <Image
            style={[
              styles.container_Item,
              index % 4 === 1 && {
                width: 190,
                height: 190,
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            ]}
            source={{uri: this.props.pt_image}}
          />
        ))}
        <View style={styles.TextContent}>
          <Text style={styles.price}>{this.props.price}</Text>
          <Text
            style={styles.sub}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            {this.props.sub}
          </Text>
          <Text
            style={styles.third}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            {this.props.third}
          </Text>
        </View>
      </View>
    );
  }
}

const Tab = () => {
  const renderItem = ({item}) => {
    return (
      <Tab_Item
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
      data={Add_Product(Tab_List)}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  ProductContainer: {
    width: '50%',
    paddingTop: 10,
  },
  TextContent: {
    flexDirection: 'column',
    marginTop: 10,
    left: 15,
  },
  price: {fontSize: 18, fontWeight: 'bold'},
  sub: {fontSize: 15},
  third: {fontSize: 13},
});

export default Tab;
