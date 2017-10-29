import React, { Component } from 'react';
import {
  Animated,
  View
} from 'react-native';
import PropTypes from 'prop-types';

export default class ParallaxScrollView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: new Animated.Value(0),
    }
  }
  onScroll = ({ nativeEvent }) => {
    this.state.scrollPosition.setValue(nativeEvent.contentOffset.y);
    if (this.props.onScroll) {
      this.props.onScroll({ nativeEvent });
    }
  }
  computeTransformationStyle = () => {
    const transform = [];
    if (this.props.headerTranslation) {
      transform.push({
        translateY: this.state.scrollPosition.interpolate({
          inputRange: [0, this.props.maxScrollPosition],
          outputRange: [0, this.props.headerTranslation],
          extrapolate: 'clamp'
        })
      });
    }
    
    if (this.props.headerScaling) {
      transform.push({
        scaleY: this.state.scrollPosition.interpolate({
          inputRange: [0, this.props.maxScrollPosition],
          outputRange: [1, this.props.headerScaling],
          extrapolate: 'clamp'
        })
      });
    }

    return transform;
  }

  renderParallax(children) {
    if (this.props.parallaxMode) {
      return (
        <View style={{ overflow: 'hidden' }}>
          <Animated.View style={{ transform: [{
            translateY: this.state.scrollPosition.interpolate({
              inputRange: [0, this.props.maxScrollPosition],
              outputRange: [0, this.props.parallaxTranslation],
              extrapolate: 'clamp'
            })
          }] }}>
           {children}
          </Animated.View>
        </View>
      )
    }

    return children;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView 
        {...this.props.scrollViewProps}
        onScroll={this.onScroll}
        scrollEventThrottle={this.props.scrollEventThrottle} 
        stickyHeaderIndices={this.props.stickyHeader ? [0] : []} 
        bounces={this.props.bounces}>
          {/* HEADER */}
          <View>
            <Animated.View style={{ transform: this.computeTransformationStyle() }}>
              {this.renderParallax(this.props.renderHeader())}
            </Animated.View>
          </View>
          {this.props.children}
        </Animated.ScrollView>
      </View>
    )
  }
}

ParallaxScrollView.propTypes = {
  maxScrollPosition: PropTypes.number.isRequired,
  headerTranslation: PropTypes.number,
  headerScaling: PropTypes.number,
  parallaxMode: PropTypes.bool,
  parallaxTranslation: PropTypes.number,
  scrollViewProps: PropTypes.object,
  scrollEventThrottle: PropTypes.number,
  bounces: PropTypes.bool,
  renderHeader: PropTypes.func.isRequired,
  onScroll: PropTypes.func,
  stickyHeader: PropTypes.bool
}

ParallaxScrollView.defaultProps = {
  parallaxMode: false,
  parallaxTranslation: 50,
  scrollEventThrottle: 16,
  bounces: false,
  stickyHeader: true
}