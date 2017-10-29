import React, { Component } from 'react';
import {
  View,
  Animated,
  Text,
  Image
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-header-scrollview';

import image from './images/1491580936376.png'

export default class ParallaxScrollViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: new Animated.Value(0),
    };
  }
  renderHeader = () => {
    return (
      <View style={{ backgroundColor: 'black', overflow: 'hidden', height: 300 }}>
        <Image source={image} />
      </View>
    )
  }
  onScroll = ({ nativeEvent }) => {
    this.state.scrollPosition.setValue(nativeEvent.contentOffset.y);
  }
  renderChildren = () => {
    const children = [];
    for (let i = 0; i < 40; i++) {
      children.push(
        <View style={{ borderBottomWidth: 1, flex: 1, height: 40 }}>
          <Text>
            {`child ${i}`}
          </Text>
        </View>
      )
    }

    return children;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView 
        onScroll={this.onScroll}
        renderHeader={this.renderHeader}
        parallaxMode={true}
        parallaxTranslation={100}
        maxScrollPosition={200} 
        headerTranslation={-225}>
          {this.renderChildren()}
        </ParallaxScrollView>
      </View>
    )
  }
}