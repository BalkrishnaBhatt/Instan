import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput
} from 'react-native'
import styles from '../../Screens/styles/StartPage'

module.exports = {
  firstScreen: () => (
    <View style={{alignItems: 'center',}}>
      <Image source={require('../../Images/Doolu_Logos_Primary_White.png')} style={{height: 24, width: 88}}/>
      <Text style={[styles.title1, {paddingTop: 20}]}>
        Personal Service.
      </Text>
      <Text style={styles.title1}>
        Trusted Help.
      </Text>
      <Text style={[styles.title2, {paddingTop: 20}]}>
        Find an assistant at the
      </Text>

      <Text style={styles.title2}>
        tip of your fingers
      </Text>

    </View>
  ),

  secondScreen: () => (
    <View style={{alignItems: 'center',}}>
      <Image source={require('../../Images/Doolu_Logos_Primary_White.png')} style={{height: 24, width: 88}}/>
      <Text style={[styles.title1, {paddingTop: 20}]}>
        Find trusted help
      </Text>
      <Text style={styles.title1}>
        in your community
      </Text>
      <Text style={[styles.title2, {paddingTop: 20}]}>
        Local, verified and trusted help to lend a
      </Text>
      <Text style={styles.title2}>
        hand with your tasks
      </Text>
    </View>
  ),

  thirdScreen: () => (
    <View style={{alignItems: 'center',}}>
      <Image source={require('../../Images/Doolu_Logos_Primary_White.png')} style={{height: 24, width: 88}}/>
      <Text style={[styles.title1, {paddingTop: 20}]}>
        Post and pay
      </Text>
      <Text style={styles.title1}>
        easily
      </Text>
      <Text style={[styles.title2, {paddingTop: 20}]}>
        It’s safe, secure and simple to post
      </Text>
      <Text style={styles.title2}>
        and pay for the help on our app
      </Text>
    </View>
  )
}
