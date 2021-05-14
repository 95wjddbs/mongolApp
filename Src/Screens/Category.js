import React, {Component} from 'react';
import {Platform, TouchableHighlight, Text, View} from 'react-native';
import Drawer from 'react-native-drawer';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {drawerOpen: null};
  }

  renderSideMenuContent = () => {
    return (
      <View style={{height: '100%'}}>
        <Text style={{}}>This is the side menu</Text>
      </View>
    );
  };

  renderMainContent = () => {
    if (!this.state.drawerOpen) {
      return (
        <View>
          <Text style={{}}>Push to Open Side Menu</Text>
        </View>
      );
    } else {
      return <Text style={{}}>The side menu is open</Text>;
    }
  };

  render() {
    return (
      <Drawer
        open={this.state.drawerOpen}
        content={this.renderSideMenuContent()}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        onClose={() => {
          this.setState({drawerOpen: false});
        }}
        panOpenMask={0.8}
        captureGestures="open"
        acceptPan={false}>
        <View style={{}}>
          <TouchableHighlight
            onPress={() => {
              this.setState({drawerOpen: true});
            }}>
            {this.renderMainContent()}
          </TouchableHighlight>
        </View>
      </Drawer>
    );
  }
}
