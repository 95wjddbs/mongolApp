import React from 'react';
import {Image} from 'react-native';
import {Container, Footer, FooterTab, Button, Text} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

function Footer_Component(props) {
  const ImageButton = ({onPress, source, text}) => {
    return (
      <Button onPress={onPress}>
        <Image style={{height: 30, resizeMode: 'contain'}} source={source} />
        <Text
          style={{fontSize: RFValue(8), color: 'black'}}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {text}
        </Text>
      </Button>
    );
  };

  return (
    <Container>
      <Footer style={{height: 80}}>
        <FooterTab style={{backgroundColor: 'white', alignItems: 'center'}}>
          <ImageButton
            onPress={() => {
              props.navigation.navigate('Category');
            }}
            text="CATEGORY"
            source={require('../images/common/menu_icon01.png')}
          />
          <ImageButton
            onPress={() => {
              props.navigation.navigate('myPoint');
            }}
            text="Point"
            source={require('../images/common/menu_icon02.png')}
          />
          <ImageButton
            onPress={() => {
              props.navigation.navigate('Search');
            }}
            text="Search"
            source={require('../images/common/menu_icon03.png')}
          />
          <ImageButton
            onPress={() => {
              props.navigation.navigate('Wishlist');
            }}
            text="Wishlist"
            source={require('../images/common/menu_icon04.png')}
          />
          <ImageButton
            onPress={() => {
              props.navigation.navigate('Mypage');
            }}
            text="MY"
            source={require('../images/common/menu_icon05.png')}
          />
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default Footer_Component;
