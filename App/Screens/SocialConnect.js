import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  StatusBar
} from 'react-native'

import _ from 'underscore'

import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles/SocialConnect'

export default class SocialConnect extends Component {

  render () {
    return (
      <View style={[styles.view, {paddingTop: StatusBar.currentHeight}]}>

        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor="rgba(0, 0, 0, 0)"
          animated/>

        <TouchableOpacity
          style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Icon name={'chevron-thin-left'} size={25}></Icon>
        </TouchableOpacity>

        <View>
          <Text style={styles.txt}>
            Connect Using a social account.
          </Text>
        </View>

        <TouchableOpacity>
          <View style={styles.fbview}>
            <View style={styles.fb}>
              <Image style={styles.fbImage} source={require('../Images/facebook-icon-png.png')}/>
              <Text style={styles.fbtxt}>
                Continue with Facebook
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.fbview}>
            <View style={styles.google}>
              <Image style={styles.fbImage} source={require('../Images/google-icon-png.png')}/>
              <Text style={styles.fbtxt}>
                Continue with Google
              </Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}
