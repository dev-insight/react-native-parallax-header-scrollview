# react-native-parallax-header-scrollview

## A fluid parallax sticky header scroll view.


![Demo IOS](./example/parallax-header/screen_capture/parallax_header.gif)

![Demo Android](./example/parallax-header/screen_capture/parallax_header_android.gif)

## Options
The scrollview is easy to configure. You have the control of the animations!

|prop|type|default|description|
|----|----|-------|-----------|
`maxScrollPosition`|`PropTypes.number.isRequired`||Animation will be played until the scroll offset reaches this prop value|
|`headerTranslation`|`PropTypes.number`||The animated translation played on the header. If no value is given, then the scrollview will behave as a regular sticky header scrollview. For best results, it is recommanded that you set it to the same value as the `maxScrollPosition` prop.|
|`headerScaling`|`PropTypes.number`||An optional scaling value to play animation on the header scale transformation. We recommend no to scale up your header, and to avoid to scale down too much your header. You may need to adapt the `headerTranslation` prop by yourself to get a nice result.|
|`parallaxMode`|`PropTypes.bool`|`false`|Set this prop to `true` if you want to enable the parallax effect.|
|`parallaxTranslation`|`PropTypes.number`|`50`|This prop is only taken into account if the previous `parallaxMode` prop is set to `true`. Change this value to change the parallax effect. The bigger the value is, the bigger the parallax effect is|
|`scrollViewProps`|`PropTypes.object`||You pass all the props you want to the scrollview through this one|
|`scrollEventThrottle`|`PropTypes.number`|`16`|The `scrollEventThrottle` given to the scrollview. Please read the [react native scrollview doc](https://facebook.github.io/react-native/docs/scrollview.html)|
|`bounces`|`PropTypes.bool`|false|If you want the scrollview `bounce` effect, set this prop to `true`|
|`renderHeader`|`PropTypes.func.isRequired`||A function to render the header.|
|`onScroll`|`PropTypes.func`||A callback to listen to the scroll event. Be aware that a `Animated.Scrollview` is used, so it's using the animated driver. As an example, you won't be able to act on the height of a component|
|`stickyHeader`|`PropTypes.bool`|`true`|If you don't want a sticky header, set it to `false` (we recommend you to use a regular scrollview instead)|

## Contribution
Help us to improve this lib with your feedback. Feel free to create an issue if you have any improvement suggestion.