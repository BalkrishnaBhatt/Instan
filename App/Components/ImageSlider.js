import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet, StatusBar, ImageBackground, Dimensions, ScrollView } from 'react-native'
import _ from 'underscore'

import styles from './Styles/ImageSlider'

const deviceWidth = Dimensions.get('window').width

export default class ImageSlider extends Component {

  animVal = new Animated.Value(0)

  render () {

    let {items} = this.props

    let imageArray = []
    let barArray = []

    _.map(items, (item, i) => {

        const thisImage = (
          <View key={`item${i}`} style={{backgroundColor: '#0009', width: deviceWidth, justifyContent: 'center', alignItems: 'center'}}>
            {item}
          </View>
        )
        imageArray.push(thisImage)

        const scrollBarVal = this.animVal.interpolate({
          inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
          outputRange: [-83.33, 83.33],
          extrapolate: 'clamp',
        })

        const thisBar = (
          <View
            key={`bar${i}`}
            style={[
              styles.track,
              {
                width: 10,
                height: 10,
                borderRadius: 5,
                marginLeft: i === 0 ? 0 : 5,
              },
            ]}
          >
            <Animated.View
              style={[
                styles.bar,
                {
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  transform: [
                    {translateX: scrollBarVal},
                  ],
                },
              ]}
            />
          </View>
        )
        barArray.push(thisBar)

        return true
      }
    )

    return (
      <View
        style={styles.container}
        flex={1}
      >

        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          animated/>

        <ImageBackground
          style={{
            flex: 1,
            width: deviceWidth
          }}
          source={{uri: 'https://www.limitlesswalls.com/media/catalog/product/cache/1/image/600x/040ec09b1e35df139433887a97daa66f/y/e/yellow_taxi_cab_on_black_and_white_street_background_nyc_decals_1494x1000.1520884205.jpg'}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={
              Animated.event(
                [{nativeEvent: {contentOffset: {x: this.animVal}}}]
              )
            }
          >
            {imageArray}

          </ScrollView>
        </ImageBackground>
        <View
          style={styles.barContainer}
        >
          {barArray}
        </View>
      </View>
    )
  }
}
