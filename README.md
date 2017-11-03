# react-native-parallax-header-scrollview

## A fluid parallax sticky header scroll view.


![Demo IOS](./example/parallax-header/screen_capture/parallax_header.gif)

![Demo Android](./example/parallax-header/screen_capture/parallax_header_android.gif)

## Options
The scrollview is easy to configure. You have the control of the animations!

|prop|type|default|description|
|----|----|-------|-----------|
`maxScrollPosition`|`PropTypes.number.isRequired`||Animated will be played until the scroll offset reaches this prop value|
|`headerTranslation`|`PropTypes.number`||The animated translation played on the header. If no value is given, then the scrollview will behave as a regular sticky header scrollview. To get a nice effect, we recommand you to set it to the same value as the `maxScrollPosition` prop.|
|`headerScaling`|`PropTypes.number`||An optional scaling value to play animation on the header scale transformation. We recommend no to scale up your header, and to avoid to scale down too much your header. You may need to adapt the `headerTranslation` prop by yourself to get a nice result.|
|`parallaxMode`|`PropTypes.bool`|`false`|Set this prop to `true` if you want to add a parallax effect.|
|`parallaxTranslation`|`PropTypes.number`|`50`|This prop is only taken in account if the previous `parallaxMode` prop is set to true|
|`scrollViewProps`|`PropTypes.object`||You pass all the props you want to the scrollview through this one|
|`scrollEventThrottle`|`PropTypes.number`|`16`|The `scrollEventThrottle` given to the scrollview. Please see the react native scrollview doc|
|`bounces`|`PropTypes.bool`|false|If you want the scrollview `bounce` effect, set this prop to `true`|
|`renderHeader`|`PropTypes.func.isRequired`||The header to render in the scrollview|
|`onScroll`|`PropTypes.func`||A callback to listen to the scroll event. Be aware that a `Animated.Scrollview` is used, so that it's using the animated driver. As an example, you won't be able to act on the height of a component|
|`stickyHeader`|`PropTypes.bool`|`true`|If you don't want a sticky header, set it to `false` (we recommend you to use a regular scrollview instead)|