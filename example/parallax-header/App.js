import React, { Component } from 'react';
import {
  View,
  Animated,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-header-scrollview';

import image from './images/1491580936376.png';

const styles = StyleSheet.create({
  child: {
    fontSize: 20,
    marginLeft: 20
  },
  childContainer: {
    borderBottomWidth: 1,
    flex: 1,
    height: 50,
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  headerImageContainer: {
    backgroundColor: 'black',
    overflow: 'hidden',
    height: 300
  },
  scrollViewContentStyle: {
    backgroundColor: '#eeeeee'
  }
});

export default class ParallaxScrollViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: new Animated.Value(0),
    };
  }
  renderHeader = () => {
    return (
      <View style={styles.headerImageContainer}>
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
        <View key={i} style={styles.childContainer}>
          <Text style={styles.child}>
            {`child ${i + 1}`}
          </Text>
        </View>
      )
    }

    return children;
  }
  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
        onScroll={this.onScroll}
        renderHeader={this.renderHeader}
        parallaxMode={true}
        parallaxTranslation={100}
        maxScrollPosition={200}
        scrollViewProps={{

          contentContainerStyle: styles.scrollViewContentStyle
        }}
        headerTranslation={-225}>
          {this.renderChildren()}
        </ParallaxScrollView>
      </View>
    )
  }
}