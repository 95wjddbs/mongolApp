import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import {Container, Content, Button, Text, View} from 'native-base';

function tab3(props) {
  return (
    <Container style={{height: '100%'}}>
      <Content style={{marginTop: 20}}>
        <ScrollView>
          <View style={{marginLeft: 16, marginRight: 16}}>
            <View style={{marginBottom: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Customer questions & answers
              </Text>
            </View>
            <Text style={{fontSize: 14}}>
              Articles that are not related to the product, articles that are
              resold, or advertisements, swear words, gossip, papers, etc. are
              deleted without notice.
            </Text>
          </View>

          <Button
            style={{
              marginTop: 8,
              width: '100%',
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#765BD9',
            }}>
            <Text>Leave a question</Text>
          </Button>

          <View
            style={{
              paddingTop: 24,
              paddingBottom: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopWidth: 1,
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: 16,
              }}>
              <Button
                style={{
                  borderRadius: 50,
                  height: 30,
                  width: 90,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: '#765BD9',
                }}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                  style={{fontSize: 12, color: '#765BD9'}}>
                  questions
                </Text>
              </Button>
              <View style={{flexDirection: 'column', marginLeft: 16}}>
                <Text style={{fontSize: 14}}>
                  Is it possible to ship today?
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text note>lkp****</Text>
                  <Text note style={{marginLeft: 32, fontSize: 13}}>
                    2020-03-18
                  </Text>
                  <Text note style={{marginLeft: 16, fontSize: 13}}>
                    09:34
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingTop: 24,
              paddingBottom: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopWidth: 1,
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: 16,
              }}>
              <Button
                style={{
                  borderRadius: 50,
                  height: 30,
                  width: 90,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#EB9257',
                }}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                  style={{fontSize: 12}}>
                  WAITING
                </Text>
              </Button>
              <View style={{flexDirection: 'column', marginLeft: 16}}>
                <Text style={{fontSize: 14}}>
                  Is it possible to ship today?
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text note>lkp****</Text>
                  <Text note style={{marginLeft: 32, fontSize: 13}}>
                    2020-03-18
                  </Text>
                  <Text note style={{marginLeft: 16, fontSize: 13}}>
                    09:34
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingTop: 24,
              paddingBottom: 16,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                borderTopWidth: 1,
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: 16,
              }}>
              <Button
                style={{
                  borderRadius: 50,
                  height: 30,
                  width: 90,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#765BD9',
                }}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                  style={{fontSize: 12}}>
                  COMPLETE
                </Text>
              </Button>
              <View style={{flexDirection: 'column', marginLeft: -24}}>
                <Text style={{fontSize: 14}}>
                  Is it possible to delivery today?
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text note>lkp****</Text>
                  <Text note style={{marginLeft: 32, fontSize: 13}}>
                    2020-03-18
                  </Text>
                  <Text note style={{marginLeft: 16, fontSize: 13}}>
                    09:34
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../images/common/rock.png')}
                style={{resizeMode: 'cover', width: 30, height: 30}}
              />
            </View>
          </View>

          <View
            style={{
              padding: 20,
              backgroundColor: '#F5FAFB',
              marginTop: 16,
              flexDirection: 'row',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Image
              source={require('../../../images/common/qna_q.png')}
              style={{width: 20, height: 20}}
            />
            <View style={{marginLeft: 16, marginTop: -4}}>
              <Text style={{fontStyle: 'italic'}}>
                Is it possible to ship today?
              </Text>
              <Text note>Will i ship immediately if i pay today?</Text>
            </View>
          </View>

          <View
            style={{
              padding: 20,
              backgroundColor: '#F5FAFB',
              flexDirection: 'row',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderTopWidth: 1,
              borderTopColor: '#EBEBEB',
            }}>
            <Image
              source={require('../../../images/common/qna_a.png')}
              style={{width: 20, height: 20}}
            />
            <View style={{marginLeft: 16, marginTop: -4}}>
              <Text style={{fontStyle: 'italic'}}>
                Is it possible to ship today?
              </Text>
              <Text note>Will i ship immediately if i pay today?</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 16,
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                paddingLeft: 12,
                paddingRight: 12,
                borderWidth: 1,
              }}>
              1
            </Text>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                paddingLeft: 12,
                paddingRight: 12,
              }}>
              2
            </Text>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                paddingLeft: 12,
                paddingRight: 12,
              }}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                paddingLeft: 12,
                paddingRight: 12,
              }}>
              4
            </Text>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                paddingLeft: 12,
                paddingRight: 12,
              }}>
              5
            </Text>

            <Image
              source={require('../../../images/common/border_num_r.png')}
              style={{
                resizeMode: 'cover',
                width: 30,
                height: 30,
                marginLeft: 16,
              }}
            />
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}

export default tab3;
