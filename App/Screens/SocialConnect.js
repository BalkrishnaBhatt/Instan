import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  StatusBar,
  BackHandler
} from 'react-native'

import _ from 'underscore'

import Icon from 'react-native-vector-icons/Entypo'

import styles from './styles/SocialConnect'

export default class SocialConnect extends Component {

  constructor (props) {
    super(props)

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  handleBackButtonClick () {
    this.props.navigation.goBack()
    return true
  }

  render () {
    return (
      <View style={[styles.view, {paddingTop: 20 + StatusBar.currentHeight}]}>

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

        <TouchableOpacity style={styles.socialTile}>
          <Image style={styles.fbImage} source={require('../Images/facebook-icon.png')}/>

          <View style={styles.socialTextContainer}>
            <Text style={styles.fbtxt}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialTile, {backgroundColor: '#4885ed'}]}>
          <Image style={styles.fbImage} source={require('../Images/google-icon.png')}/>

          <View style={styles.socialTextContainer}>
            <Text style={styles.fbtxt}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}
