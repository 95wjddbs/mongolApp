function Header_Right() {
  return(
    <Stack.Screen
      name="MainPage"
      options={{
        headerShown: false,
        headerLeft: () => (
          <Image
            resizeMode="cover"
            source={require('./Src/images/common/logo.png')}
            style={{
              resizeMode: 'contain',
              width: 160,
              left: 15,
            }}
          />
        ),
        title: '',
        headerRight: () => (
          <TouchableOpacity
            style={{marginRight: 15, flexDirection: 'row'}}
            onPress={() => alert('검색 결과가 없습니다')}>
            <Icon
              name="search-outline"
              style={{color: 'black', marginRight: 15}}
            />
            <Icon name="cart-outline" style={{color: 'black'}} />
          </TouchableOpacity>
        ),
      }}
      component={MainPage}
    />,
  );
}

export default Header_Right;
