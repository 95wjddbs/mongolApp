import React from 'react';
import {FlatList} from 'react-native';
import Tab1_Item from './Tab1_Item';

const productList = [
  {
    id: 1,
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750382-46cd8780-b24e-11eb-841a-ea518ce2dccb.png',
    price: '239,000T',
    sub: 'WB COLOR',
    third: '6antfgeqaseed mansdsda',
  },
  {
    id: 2,
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750386-47feb480-b24e-11eb-8a3c-a440cd6026e3.png',
    price: '211,000T',
    sub: 'TERREX AGRAVIC TR W',
    third: '6antfgeqaseed mansdsda',
  },
  {
    id: 3,
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750389-48974b00-b24e-11eb-92e3-2ad09672dbe7.png',
    price: '998,900T',
    sub: 'ELLA',
    third: '6antfgeqaseed mansdsda',
  },
  {
    id: 4,
    pt_image1:
      'https://user-images.githubusercontent.com/66461799/117750390-492fe180-b24e-11eb-9a08-120ffe541ef6.png',
    price: '425,000T',
    sub: 'Marvin Suede Mini',
    third: '6antfgeqaseed mansdsda',
  },
];

const Tab1 = () => {
  const renderItem = ({item}) => {
    return (
      <Tab1_Item
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
      data={Add_Product(productList)}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default Tab1;
