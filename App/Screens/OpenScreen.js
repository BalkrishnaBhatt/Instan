import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

import styles from './styles/OpenScreen'

export default class OpenScreen extends React.Component {

  render () {
    return (
      <View style={styles.view}>
        <View style={{flex: 0.4, justifyContent: 'flex-end'}}>
          <Image source={require('../Images/Doolu-Logos-Primary-Dark.png')} style={styles.img}/>
        </View>

        <View style={{flex: 0.3, justifyContent: 'center'}}/>

        <View style={{flex: 0.3, justifyContent: 'flex-end', paddingBottom: 40}}>
          <Text style={styles.txt}>
            © 2018 Doolu Inc. All rights reserved.
          </Text>
        </View>
      </View>
    )
  }
}

