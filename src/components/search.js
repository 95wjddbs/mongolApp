import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, Body, Button, Icon, Thumbnail } from 'native-base';

export default class search extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'white', alignItems:'center', borderBottomWidth:2 ,borderBottomColor:'black'}}>
        <Left>
            <Button transparent>
              <Icon name='arrow-back' style={{color:'black'}} />
            </Button>
            </Left>
            <Body>
            <Item floatingLabel>
              <Label style={{color:'black'}}>Please enter</Label>
              <Input />
            </Item>
            </Body>
            <Right>
                <Thumbnail style={{height:35, resizeMode:'contain'}} source={{uri: "https://i.postimg.cc/Qd7tww2b/menu-icon03.png"}}/>
            </Right>
        </Header>
        <Content>
          <Form>
          </Form>
        </Content>
      </Container>
    );
  }
}