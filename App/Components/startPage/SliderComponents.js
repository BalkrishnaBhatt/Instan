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
      <Text style={styles.title1}>
        Personal Service.
      </Text>
      <Text style={styles.title2}>
        Trusted Help.
      </Text>
      <Text style={styles.title3}>
        Find an assistant at the
      </Text>

      <Text style={styles.title4}>
        tip of your fingers
      </Text>

    </View>
  ),

  secondScreen: () => (
    <View style={{alignItems: 'center',}}>
      <Image source={require('../../Images/Doolu_Logos_Primary_White.png')} style={{height: 24, width: 88}}/>
      <Text style={styles.title1}>
        Find trusted help
      </Text>
      <Text style={styles.title2}>
        in your community
      </Text>
      <Text style={styles.title3}>
        Local, verified and trusted help to lend a
      </Text>
      <Text style={styles.title4}>
        hand with your tasks
      </Text>
    </View>
  ),

  thirdScreen: () => (
    <View style={{alignItems: 'center',}}>
      <Image source={require('../../Images/Doolu_Logos_Primary_White.png')} style={{height: 24, width: 88}}/>
      <Text style={styles.title1}>
        Post and pay
      </Text>
      <Text style={styles.title2}>
        easily
      </Text>
      <Text style={styles.title3}>
        It’s safe, secure and simple to post
      </Text>
      <Text style={styles.title4}>
        and pay for the help on our app
      </Text>
    </View>
  )
}
